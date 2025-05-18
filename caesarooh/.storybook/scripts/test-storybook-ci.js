// @ts-check
const { spawn, exec } = require('child_process');
const path = require('path');
const fs = require('fs');

// Create snapshots directory if it doesn't exist
const snapshotsDir = path.join(__dirname, '..', '..', '__snapshots__');
if (!fs.existsSync(snapshotsDir)) {
  fs.mkdirSync(snapshotsDir, { recursive: true });
}

/**
 * Function to run commands and return promise
 * @param {string} command - Command to run
 * @param {string[]} args - Command arguments
 * @returns {Promise<void>}
 */
function runCommand(command, args) {
  return new Promise((resolve, reject) => {
    console.log(`Running command: ${command} ${args.join(' ')}`);
    const proc = spawn(command, args, { 
      stdio: 'inherit',
      shell: process.platform === 'win32' // Use shell on Windows
    });
    
    proc.on('close', (code) => {
      if (code === 0) {
        // @ts-ignore - No argument needed for resolve
        resolve();
      } else {
        reject(new Error(`Command failed with code ${code}`));
      }
    });
  });
}

// Main function to run tests
async function runTests() {
  try {
    // Start Storybook server
    console.log('Starting Storybook server...');
    const storybookProcess = spawn('npm', ['run', 'storybook', '--', '--ci', '--quiet'], {
      stdio: 'pipe',
      shell: process.platform === 'win32' // Use shell on Windows
    });
    
    // Wait for Storybook to start
    console.log('Waiting for Storybook to start...');
    await new Promise((resolve) => {
      let data = '';
      storybookProcess.stdout.on('data', (chunk) => {
        data += chunk.toString();
        if (data.includes('Storybook') && data.includes('started')) {
          console.log('Storybook server started!');
          // @ts-ignore - No argument needed for resolve
          resolve();
        }
      });
      
      // Timeout after 60 seconds
      setTimeout(() => {
        console.log('Timed out waiting for Storybook to start. Proceeding anyway...');
        // @ts-ignore - No argument needed for resolve
        resolve();
      }, 60000);
    });
    
    // Run tests
    console.log('Running Storybook tests...');
    await runCommand('npm', ['run', 'test-storybook', '--', '--ci']);
    
    // Kill Storybook server
    console.log('Tests completed, shutting down Storybook server...');
    storybookProcess.kill('SIGINT');
    
    console.log('Testing completed successfully!');
  } catch (error) {
    console.error('Error running tests:', error);
    process.exit(1);
  }
}

// Run the main function
runTests(); 