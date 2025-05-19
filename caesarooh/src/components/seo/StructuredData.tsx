'use client';

import React from 'react';
import JsonLd, { createOrganizationSchema, createWebsiteSchema } from './JsonLd';

interface StructuredDataProps {
  organizationData: {
    name: string;
    url?: string;
    logo?: string;
    sameAs?: string[];
  };
  websiteData: {
    name: string;
    url: string;
  };
}

/**
 * Client component that handles the generation of structured data
 * This component should be imported in server components to handle
 * client-side JSON-LD schema generation
 */
export default function StructuredData({ 
  organizationData, 
  websiteData 
}: StructuredDataProps) {
  const structuredData = [
    createOrganizationSchema(organizationData),
    createWebsiteSchema(websiteData),
  ];

  return <JsonLd data={structuredData} />;
} 