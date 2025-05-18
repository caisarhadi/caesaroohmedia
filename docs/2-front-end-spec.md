**CAESAR OOH MEDIA Website Modernization UI/UX Specification**

Version: 1.0
Date: May 17, 2025

**Introduction**

This document defines the user experience goals, information architecture, user flows, and visual design specifications for the CAESAR OOH MEDIA Website Modernization project's user interface. Its purpose is to ensure a shared understanding among stakeholders and provide a clear, actionable guide for design and development efforts, ultimately resulting in a modern, user-centric, effective, and engaging website that meets the project's objectives.

  - Link to Primary Design Files: (To be determined and managed by the user; no link will be stored in this document at this stage. Visual designs will be developed based on the specifications herein.)
  - Link to Deployed Storybook / Design System: (URL to be established and added once Storybook is developed and deployed, as per the Frontend Architecture document).

**Overall UX Goals & Principles**

  - **Target User Personas:**
      - **Bro (Marketing Manager):** Represents a typical client of CAESAR OOH MEDIA. "Bro" needs to efficiently find effective out-of-home advertising solutions, understand detailed inventory information including pricing and availability, and easily explore inventory in specific geographic locations relevant to their marketing campaigns. Key values for "Bro" include efficiency in task completion, the ability to negotiate pricing, fast response times from CAESAR OOH MEDIA, and direct, clear communication channels.
      - **Sis (Media Planner):** Works at an advertising agency and is responsible for planning OOH campaigns for various clients. "Sis" requires access to comprehensive and detailed specifications for OOH sites, accurate Point of Interest (POI) information surrounding these sites, and intuitive tools to compare, shortlist, and present OOH options. "Sis" values thorough data, user-friendly exploration tools, and visually appealing presentations of inventory and site details.
      - **Yopi (CAESAR Internal User):** Represents internal staff at CAESAR OOH MEDIA, such as sales or account management. "Yopi" needs to quickly access detailed inventory information, easily showcase this information to clients, and generate shareable formats like printable PDF spec sheets from individual listings, which can be promptly emailed or sent via WhatsApp.
  - **Usability Goals:**
      - **Intuitive Exploration:** The website must enable users ("Bro," "Sis") to effortlessly navigate, search, filter, and discover relevant OOH inventory, solutions, and informational content. The interface design will prioritize clarity and avoid clutter to facilitate ease of use.
      - **Efficiency & Speed:** All key user tasks, such as finding specific inventory items, understanding their features and context, generating PDF spec sheets ("Yopi's" need), and submitting inquiries ("Bro's" need), must be completable with a minimal number of steps, fast page load and interaction response times, and no unnecessary friction.
      - **Clarity & Transparency:** All information presented on the website—regarding OOH sites, POIs, advertising solutions, and industry insights—must be clear, accurate, comprehensive, and easy to understand. Visual presentation of data and inventory is particularly important for "Sis."
      - **Direct Engagement:** The website should actively facilitate direct communication and inquiries from potential clients ("Bro") through clearly visible and accessible Call-to-Actions (CTAs), contact forms, and direct contact information (e.g., WhatsApp chat).
      - **Enjoyable Experience:** The overall user experience should be engaging, sleek, modern, and enjoyable. The design and interactions should encourage exploration and effectively showcase CAESAR OOH MEDIA's technological capabilities and premium offerings.
      - **Accessibility:** The website must be designed and developed to be usable by people with a wide range of abilities, striving to meet or exceed the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.
  - **Design Principles:**
      - **User-Centricity:** All design and development decisions will prioritize the needs, goals, and workflows of the target user personas: "Bro," "Sis," and "Yopi."
      - **Modern & Sleek:** The visual design, interactions, and animations will reflect a cutting-edge, premium, and uncluttered aesthetic, reinforcing CAESAR OOH MEDIA's position as a technologically advanced provider.
      - **Informative & Empowering:** Provide users with comprehensive data, powerful yet intuitive tools (e.g., advanced filtering, interactive mapping, PDF generation), and clear pathways to help them achieve their objectives and make informed decisions.
      - **Seamless Interaction:** Transitions, animations (driven by GSAP), and interactive elements (such as maps and drawer navigation) will be designed to be smooth, purposeful, and enhance usability without causing distraction, clutter, or performance degradation.
      - **Consistency:** Maintain consistent UI patterns, terminology, visual styling, and interaction behaviors across the entire website, including consistent presentation and functionality in both light and dark modes.
      - **Performance by Design:** Ensure the interface is architected and implemented to be fast and responsive, particularly on data-heavy pages like Mapping and Inventory, contributing significantly to an overall enjoyable and efficient user experience.

**Information Architecture (IA)**

  - **Site Map / Screen Inventory:**
    The following diagram illustrates the primary pages of the website and their hierarchical relationships:

    ```mermaid
    graph TD
        Homepage["Homepage (/)"]
        About["About Us (/about-us)"]
        SolutionsPage["Solutions (/solutions)"]
        InsightList["Insight - List (/insight)"]
        InsightDetail["Insight - Article Detail (/insight/{article-slug})"]
        MappingPage["Mapping (/mapping)"]
        InventoryList["Inventory - List (/inventory)"]
        InventoryDetail["Inventory - Item Detail (/inventory/{item-id})"]
        Contact["Contact Us (/contact-us)"]

        Homepage --> About
        Homepage --> SolutionsPage
        Homepage --> InsightList
        Homepage --> MappingPage
        Homepage --> InventoryList
        Homepage --> Contact

        InsightList --> InsightDetail
        InventoryList --> InventoryDetail
        MappingPage -.-> InventoryDetail
        InventoryDetail -.-> MappingPage
    ```

  - **Navigation Structure:**

      - **Primary Navigation (Drawer Menu):**
          - Accessed via a standardized menu icon (e.g., hamburger icon) located in the site header.
          - The drawer will slide in smoothly from the left side of the viewport (animation managed by GSAP).
          - It will contain direct links to the main sections of the site: Homepage, About Us, Solutions, Insight, Mapping, Inventory, Contact Us.
          - The drawer must be easily dismissible via an explicit close icon/button within the drawer, by clicking outside the drawer area, or potentially via a swipe gesture on touch devices.
          - Full keyboard accessibility (tab navigation, activation of links, closing with Escape key) and screen-reader compatibility are mandatory.
      - **Header:**
          - The header will be persistent across all pages. On mobile devices, it may be designed to be sticky or partially hide/reveal on scroll to maximize viewport space, while on desktops, it will likely be a standard sticky header.
          - It will contain:
              - The CAESAR OOH MEDIA Company Logo (clickable, linking to the Homepage).
              - The Menu Toggle Icon for opening and closing the Drawer Menu.
              - The Dark/Light Mode Toggle Switch for theme selection.
      - **Footer:**
          - The footer will be persistent across all pages of the website.
          - It will contain:
              - **Compact Contact Form Snippet:** Key fields (e.g., Name, Email, Message) and a Submit Button for quick inquiries. This may submit directly or expand/link to the full Contact Us page form.
              - **Company Contact Details:** Clearly displayed phone number(s) and email address(es).
              - **Office Location Map Snippet:** A small, non-interactive or minimally interactive visual representation (image or basic embed) of the company's office location.
              - **Social Media Links:** Icons linking to CAESAR OOH MEDIA's official LinkedIn company page (potentially showcasing latest articles if an API allows, otherwise linking to the profile) and Instagram profile (potentially showcasing latest posts if an API allows, otherwise linking to the profile).
              - Standard Copyright information (e.g., © 2025 CAESAR OOH MEDIA. All Rights Reserved.).
      - **Breadcrumbs:**
          - Breadcrumb navigation will be implemented on deeper-level pages to provide clear navigational context and allow users to easily backtrack.
          - Specifically for:
              - **Insight Section:** e.g., `Home > Insight > {Article Title}`
              - **Inventory Section:** e.g., `Home > Inventory > {Listing ID/Name}`
      - **In-Page Navigation/CTAs:**
          - The Homepage will feature distinct summary sections for key site areas (Solutions, Mapping, Inventory, Insight), each with prominent and clear Call-to-Actions (CTAs) to navigate users to the respective detailed pages.
          - Within the Inventory list view, each inventory item will serve as a CTA linking to its respective detail page.
          - Within the Insight list view, each article summary/card will serve as a CTA linking to the full article content.
      - **Persistent Utility Buttons (Sticky Bottom Right):**
          - **Back to Top Button:** This button will appear dynamically after the user has scrolled down a certain amount of the page. Clicking it will smoothly scroll the page back to the top.
          - **Direct WhatsApp Chat Button:** This button will initiate a WhatsApp chat session with a pre-defined CAESAR OOH MEDIA contact number, facilitating direct communication.
          - These buttons must be designed to be unobtrusive yet easily discoverable and accessible, especially on mobile devices. Their combined presentation needs careful design to avoid visual clutter and ensure they do not obscure critical page content.

**User Flows**

This section details the step-by-step paths users will take to accomplish key tasks on the website.

  - **User Flow 1: Exploring OOH Inventory on the Mapping Page ("Bro" or "Sis")**

      - **Goal:** To enable users (typically "Bro" or "Sis") to find suitable OOH (Out-of-Home) inventory by visually exploring locations on an interactive map, applying various filter criteria, and viewing basic site information along with nearby Points of Interest (POIs) and other OOH sites within a defined radius.
      - **Preconditions:** The user is currently on the Mapping Page. All necessary map data, including OOH site locations, POI data, and information regarding 360-degree image availability, has been successfully loaded and rendered on the map.
      - **Diagram & Steps:**
        ```mermaid
        graph TD
            F1_Start[UserOnMappingPage] --> F1_InteractWithMap{InteractWithMap};
            F1_InteractWithMap -- PanZoom --> F1_MapViewUpdates[MapViewUpdates];
            F1_MapViewUpdates --> F1_InteractWithMap;
            F1_InteractWithMap -- TypeInSearchBar --> F1_EnterSearchQuery[EnterSearchQueryAddressLandmarkOOH_ID];
            F1_EnterSearchQuery --> F1_ResultsFound{ResultsFound};
            F1_ResultsFound -- Yes --> F1_MapPansToResult[MapPansZoomsToResultOrHighlightsSite];
            F1_MapPansToResult --> F1_InteractWithMap;
            F1_ResultsFound -- No --> F1_DisplayNoResults[DisplayNoResultsMessage];
            F1_DisplayNoResults --> F1_InteractWithMap;

            F1_InteractWithMap -- ApplyModifyFilters --> F1_OpenFilterPanel[OpenOrInteractWithFilterPanel];
            F1_OpenFilterPanel --> F1_SelectFilterCriteria[SelectFilterCriteriaMediaTypeSizeEtc];
            F1_SelectFilterCriteria --> F1_ApplyFilters[ApplyFilters];
            F1_ApplyFilters --> F1_MapUpdatesFiltered[MapUpdatesToShowMatchingOOHSites];
            F1_MapUpdatesFiltered --> F1_InteractWithMap;

            F1_InteractWithMap -- ClickOOHSiteMarker --> F1_DisplayOOHSiteInfo[DisplayOOHSiteInfoPanelOrPopup];
            F1_DisplayOOHSiteInfo --> F1_ShowSiteInfoDetails["ShowInfo_IDTypeSizeIlluminationThumbnail"];
            F1_ShowSiteInfoDetails --> F1_ShowEmbeddedMapSnippet[ShowEmbeddedMapSnippetOfSiteLocation];
            F1_ShowEmbeddedMapSnippet --> F1_Show360ViewOption{ThreeSixtyViewAvailable};
            F1_Show360ViewOption -- Yes --> F1_Load360Viewer[LoadAndDisplay360ImageOrStreetView];
            F1_Load360Viewer --> F1_Interact360[UserInteractsWith360View];
            F1_Interact360 --> F1_TogglePOIVisibility;
            F1_Show360ViewOption -- No --> F1_TogglePOIVisibility{TogglePOIVisibilityOrFilter};

            F1_TogglePOIVisibility -- Yes --> F1_UserInteractsPOIControls[UserInteractsWithPOIControls];
            F1_UserInteractsPOIControls --> F1_POIDisplayUpdates[POIDisplayOnMapUpdatesAroundSelectedOOH];
            F1_POIDisplayUpdates --> F1_DisplayOOHSiteInfo;
            F1_TogglePOIVisibility -- No --> F1_ViewFullListing{ViewFullListing};
            F1_ViewFullListing -- Yes --> F1_NavigateToInventoryDetail[NavigateToInventoryItemDetailPage];
            F1_NavigateToInventoryDetail --> F1_End[EndUserNavigatesAwayOrContinuesExploring];
            F1_ViewFullListing -- No --> F1_InteractWithMap;

            F1_InteractWithMap -- ClickPOIMarker --> F1_DisplayPOIInfo[DisplayPOIInfoNameType];
            F1_DisplayPOIInfo --> F1_InteractWithMap;

            F1_InteractWithMap -- UseMapTools --> F1_UserInteractsMapTool[UserInteractsWithMapTool];
            F1_UserInteractsMapTool -- ShowNearbyOOH_POI --> F1_SelectRadius[SelectRadiusForNearbySearch];
            F1_SelectRadius --> F1_MapHighlightsNearby[MapHighlightsOtherOOHSitesAndPOIsWithinRadius];
            F1_MapHighlightsNearby --> F1_InteractWithMap;
            F1_UserInteractsMapTool -- MeasureDistance --> F1_ToolProvidesMeasurement[ToolProvidesFeedbackOrMeasurementOnMap];
            F1_ToolProvidesMeasurement --> F1_InteractWithMap;

            F1_InteractWithMap -- ClosePageOrNavigateAway --> F1_End;
        ```
      - **Success Condition:** The user successfully finds relevant OOH sites or related information on the map, is able to view contextual details including embedded map views and 360-degree imagery where available, or smoothly navigates to a detailed inventory listing page for further exploration.
      - **Edge Cases/Error States:**
          - If no OOH sites match the applied filter criteria, the map should display a clear, user-friendly message indicating this.
          - During slow map tile, OOH site data, or 360-degree image loading, appropriate loading indicators (e.g., spinners, placeholders) must be shown. Consider offering a simplified map view if performance is severely degraded.
          - If a 360-degree view is not available for a selected OOH site, this should be clearly indicated, or the option to view it should be gracefully hidden.
          - If a user enters an invalid search query (e.g., an unrecognised address or ID), the system should provide a helpful error message or suggestions.
          - If POI data is unavailable for a specific area or selected OOH site, this should be clearly communicated to the user.
          - If a radius search for nearby OOH sites or POIs yields no additional results, the user should be informed.

  - **User Flow 2: Finding and Viewing OOH Inventory in Marketplace ("Bro" or "Sis", "Yopi")**

      - **Goal:** To allow users ("Bro," "Sis," or "Yopi") to effectively browse, filter, sort, and view comprehensive detailed information for OOH inventory items presented in a marketplace-style interface. Users should also be able to easily share or distribute this information (e.g., PDF download, email, WhatsApp).
      - **Preconditions:** The user is on the Inventory List page. All relevant inventory data, including details and 360-degree image availability information, is loaded and ready for display.
      - **Diagram & Steps:**
        ```mermaid
        graph TD
            F2_Start[UserOnInventoryListPage] --> F2_InteractFiltersSort{InteractWithFiltersOrSort};
            F2_InteractFiltersSort -- Yes --> F2_OpenFilterSortPanel[OpenOrInteractFilterSortPanel];
            F2_OpenFilterSortPanel --> F2_SelectCriteria["SelectCriteriaMediaTypeLocationSizeEtc"];
            F2_SelectCriteria --> F2_ApplyFiltersSort[ApplyFiltersOrSort];
            F2_ApplyFiltersSort --> F2_InventoryListUpdates[InventoryListUpdatesMatchingSortedItems];
            F2_InventoryListUpdates --> F2_Start;

            F2_InteractFiltersSort -- No --> F2_ScrollPaginate{ScrollOrPaginateList};
            F2_ScrollPaginate -- Yes --> F2_ViewMoreItems[ViewMoreInventoryItems];
            F2_ViewMoreItems --> F2_Start;

            F2_ScrollPaginate -- No --> F2_ClickInventoryItem{ClickOnInventoryItem};
            F2_ClickInventoryItem -- Yes --> F2_NavigateToDetail[NavigateToInventoryItemDetailPage];
            F2_NavigateToDetail --> F2_ViewDetailPageContent["ViewContentMultipleImagesFullSpecsLocationDesc"];
            F2_ViewDetailPageContent --> F2_ViewEmbeddedMap[ViewEmbeddedMapSnippetOfLocation];
            F2_ViewEmbeddedMap --> F2_View360ImageOption{ThreeSixtyViewAvailable};
            F2_View360ImageOption -- Yes --> F2_Load360ViewerDetail[LoadAndDisplay360ImageOrStreetViewOnDetailPage];
            F2_Load360ViewerDetail --> F2_Interact360Detail[UserInteractsWith360View];
            F2_Interact360Detail --> F2_After360Interaction;
            F2_View360ImageOption -- No --> F2_After360Interaction;

            F2_After360Interaction --> F2_InteractImageGallery{InteractWithStandardImageGallery};
            F2_InteractImageGallery -- Yes --> F2_SwipeViewImages[SwipeOrClickToViewNextPrevImage];
            F2_SwipeViewImages --> F2_After360Interaction;
            F2_InteractImageGallery -- No --> F2_ClickEnquireCTA{ClickEnquireNowOrRequestQuote};

            F2_ClickEnquireCTA -- Yes --> F2_OpenContactForm[OpenOrNavigateToContactFormPreFillOOH_ID];
            F2_OpenContactForm --> F2_UserFillsForm[UserFillsAndSubmitsForm];
            F2_UserFillsForm --> F2_FormSubmitSucceeded{FormSubmissionSucceeded};
            F2_FormSubmitSucceeded -- Yes --> F2_DisplaySuccessMsg[DisplaySuccessOrThankYouMessage];
            F2_FormSubmitSucceeded -- No --> F2_DisplayErrorMsg[DisplayErrorMessageRetainData];
            F2_DisplayErrorMsg --> F2_OpenContactForm;
            F2_DisplaySuccessMsg --> F2_EndFlow[EndInquirySentOrUserNavigatesAway];

            F2_ClickEnquireCTA -- No --> F2_AccessPDFSharing{AccessPDFOrSharingOptions};
            F2_AccessPDFSharing -- Yes --> F2_DisplayShareOptionsMenu[DisplaySharingOptionsMenuOrModal];
                F2_DisplayShareOptionsMenu -- DownloadPDF --> F2_InitiatePDFDownload[InitiatePDFDownload];
                F2_InitiatePDFDownload --> F2_ConfirmPDFStart[ShowPDFDownloadStartedConfirmation];
                F2_ConfirmPDFStart --> F2_After360Interaction;
                F2_DisplayShareOptionsMenu -- Print --> F2_TriggerPrintDialog[TriggerBrowserPrintDialog];
                F2_TriggerPrintDialog --> F2_ConfirmPrintStart[ShowPrintInitiatedConfirmation];
                F2_ConfirmPrintStart --> F2_After360Interaction;
                F2_DisplayShareOptionsMenu -- Email --> F2_OpenEmailClient[OpenDefaultEmailClientOrForm];
                F2_OpenEmailClient --> F2_ConfirmEmailSent[ShowEmailSentOrPreparedConfirmation];
                F2_ConfirmEmailSent --> F2_After360Interaction;
                F2_DisplayShareOptionsMenu -- ShareToWhatsApp --> F2_OpenWhatsApp[OpenWhatsAppWithPrefilledMessage];
                F2_OpenWhatsApp --> F2_ConfirmWhatsAppShare[ShowSharedToWhatsAppConfirmation];
                F2_ConfirmWhatsAppShare --> F2_After360Interaction;
            F2_AccessPDFSharing -- No --> F2_ShareSocialMedia{ShareOnSocialMediaOtherPlatforms};
            F2_ShareSocialMedia -- Yes --> F2_OpenSocialSharingOptions[OpenSocialSharingOptionsFB_X_LinkedIn];
            F2_OpenSocialSharingOptions --> F2_After360Interaction;
            F2_ShareSocialMedia -- No --> F2_ViewEmbeddedMapAgain{RecheckEmbeddedMapLink};
            F2_ViewEmbeddedMapAgain -- Yes --> F2_ViewEmbeddedMap;
            F2_ViewEmbeddedMapAgain -- No --> F2_GoBackToList{GoBackToList};
            F2_GoBackToList -- Yes --> F2_Start;
            F2_GoBackToList -- No --> F2_ClosePage[ClosePageOrNavigateAway];
            F2_ClosePage --> F2_EndFlow;

            F2_ClickInventoryItem -- No --> F2_ClosePage;
        ```
      - **Success Condition:** The user successfully finds relevant inventory items, views their detailed information (including images, maps, and 360-degree views), makes an inquiry, or successfully downloads/shares the information in their preferred format.
      - **Edge Cases/Error States:**
          - If no inventory items match the applied filter criteria, a clear message should be displayed.
          - If PDF generation/download, printing, emailing, or WhatsApp sharing actions fail, the user must be informed with a clear error message.
          - If an error occurs during the submission of an inquiry form, a user-friendly error message should be provided, and if possible, the data entered by the user should be retained to prevent loss.
          - For large image files or 360-degree media, appropriate placeholders (e.g., blur-up images, skeleton loaders) and lazy loading techniques must be used to manage user expectations and performance.
          - If a 360-degree view is not available for a specific listing, this should be clearly indicated, or the option should be hidden.

  - **User Flow 3: Reading an Insight Article**

      - **Goal:** To enable users to easily find, access, and read articles (e.g., white papers, industry insights) from the Insight section of the website, providing an enjoyable and focused reading experience.
      - **Preconditions:** The user is on any page of the CAESAR OOH MEDIA website. Insight articles are available.
      - **Diagram & Steps:**
        ```mermaid
        graph TD
            F3_Start[UserOnAnyPage] --> F3_NavigateToInsight{NavigateToInsightSection};
            F3_NavigateToInsight -- ViaHeaderOrDrawer --> F3_ArriveInsightList[UserArrivesAtInsightListPage];
            F3_NavigateToInsight -- ViaHomepageCTA --> F3_ArriveInsightList;

            F3_ArriveInsightList --> F3_ViewArticleList["ViewArticlesAsHorizontallySwipeableCardsOrGrid"];
            F3_ViewArticleList --> F3_CardDetails[EachCardTitleSummaryDateImage];
            F3_CardDetails --> F3_SwipeScrollPaginate{SwipeScrollOrPaginateToFindArticle};
            F3_SwipeScrollPaginate -- Yes --> F3_CardDetails;
            F3_SwipeScrollPaginate -- No --> F3_ClickArticleCard{ClickOnArticleCardOrReadMore};
            F3_ClickArticleCard -- Yes --> F3_NavigateToArticleDetail[NavigateToInsightArticleDetailPage];
            F3_NavigateToArticleDetail --> F3_ViewArticleContent["ViewArticleContentFormattedTextImagesBreadcrumbs"];
            F3_ViewArticleContent --> F3_ToggleReadingMode{OptionalToggleReadingMode};
            F3_ToggleReadingMode -- Yes --> F3_ReadingModeActive[InterfaceAdjustsForOptimalReadability];
            F3_ReadingModeActive --> F3_InteractInReadingMode[InteractWithArticleInReadingMode];
            F3_InteractInReadingMode --> F3_ToggleReadingMode;
            F3_ToggleReadingMode -- No --> F3_InteractNormalMode[InteractWithArticleInNormalMode];
            F3_InteractNormalMode --> F3_FinishedReading{FinishedReadingOrNavigateAway};
            F3_FinishedReading -- Yes --> F3_End[EndUserLeavesArticlePage];
            F3_FinishedReading -- No --> F3_InteractNormalMode;

            F3_ClickArticleCard -- No --> F3_LeaveInsightSection[LeaveInsightSectionOrNavigateAway];
            F3_LeaveInsightSection --> F3_End;
        ```
      - **Success Condition:** The user successfully navigates to an article and reads its content. The optional reading mode, if used, enhances their experience.
      - **Edge Cases/Error States:**
          - If an article is not found (e.g., due to a broken link or incorrect slug), a user-friendly "404 Not Found" page or a specific "Article not found" message should be displayed.
          - If images within an article fail to load, appropriate alt text must be displayed, and placeholders can be used to maintain layout integrity.
          - If the "Reading Mode" toggle functionality encounters an error, the page should gracefully remain in the standard article view.

  - **User Flow 4: Toggling Dark/Light Mode**

      - **Goal:** To allow users to switch the website's visual theme between dark and light modes, have this preference intelligently defaulted (based on OS/system time if no manual preference), and ensure the chosen preference is remembered for subsequent visits.
      - **Preconditions:** The user is on any page of the website. The Dark/Light mode toggle switch is visible and accessible (typically in the header).
      - **Diagram & Steps:**
        ```mermaid
        graph TD
            F4_Start[PageLoad] --> F4_CheckLocalStorage{HasUserManuallySetThemeInLocalStorage};
            F4_CheckLocalStorage -- Yes --> F4_ApplyLocalStorageTheme[ApplyThemeFromLocalStorage];
            F4_ApplyLocalStorageTheme --> F4_DisplayPageWithTheme[DisplayPageWithAppliedTheme];

            F4_CheckLocalStorage -- No --> F4_CheckSystemPrefEnabled{IsUseSystemPreferenceEnabled};
            F4_CheckSystemPrefEnabled -- Yes --> F4_DetectOSMode[DetectOSDarkLightMode];
            F4_DetectOSMode --> F4_ApplyOSTheme[ApplyOSDetectedTheme];
            F4_ApplyOSTheme --> F4_DisplayPageWithTheme;
            F4_CheckSystemPrefEnabled -- No --> F4_DetectSystemTime[DetectSystemTimeDayOrNight];
                F4_DetectSystemTime -- DayTime --> F4_ApplyLightThemeDefault[ApplyLightThemeAsDefault];
                F4_ApplyLightThemeDefault --> F4_ShowDayTooltip[ShowSubtleTooltipDaytimeDefaultActive];
                F4_ShowDayTooltip --> F4_DisplayPageWithTheme;
                F4_DetectSystemTime -- NightTime --> F4_ApplyDarkThemeDefault[ApplyDarkThemeAsDefault];
                F4_ApplyDarkThemeDefault --> F4_ShowNightTooltip[ShowSubtleTooltipNighttimeDefaultActive];
                F4_ShowNightTooltip --> F4_DisplayPageWithTheme;

            F4_DisplayPageWithTheme --> F4_UserLocatesToggle[UserLocatesDarkLightModeToggleOrSettings];
            F4_UserLocatesToggle --> F4_UserClicksToggle{UserClicksToggleOrSelectsMode};
            F4_UserClicksToggle -- SelectLight --> F4_ApplyLightThemeManual[ApplyLightThemeManually];
            F4_ApplyLightThemeManual --> F4_ThemeUpdates[WebsiteThemeImmediatelyUpdates];
            F4_ThemeUpdates --> F4_ToggleStateChanges[ToggleStateVisuallyChanges];
            F4_ToggleStateChanges --> F4_SaveManualLightPref[UsersManualPreferenceLightSavedToLocalStorage];
            F4_SaveManualLightPref --> F4_UserContinuesBrowse[UserContinuesBrowse];

            F4_UserClicksToggle -- SelectDark --> F4_ApplyDarkThemeManual[ApplyDarkThemeManually];
            F4_ApplyDarkThemeManual --> F4_ThemeUpdates;

            F4_UserClicksToggle -- SelectSystemDefault --> F4_RemoveManualPref[RemoveManualPreferenceRevertToOSOrTimeDetection];
            F4_RemoveManualPref -- OSPreference --> F4_DetectOSMode;
            F4_RemoveManualPref -- TimePreference --> F4_DetectSystemTime;

            F4_UserContinuesBrowse --> F4_RevisitsSite{RevisitsSiteLater};
            F4_RevisitsSite -- Yes --> F4_CheckLocalStorage;
            F4_RevisitsSite -- No --> F4_EndFlow[EndUserSession];
            F4_UserContinuesBrowse -- ClicksToggleAgain --> F4_UserClicksToggle;
        ```
      - **Success Condition:** The website theme changes successfully upon user interaction with the toggle. The selected theme preference is correctly applied across all pages and components. If a manual preference is set, it is saved (e.g., in `localStorage`) and automatically reapplied on subsequent visits. If no manual preference exists, the theme defaults intelligently based on OS settings or system time.
      - **Edge Cases/Error States:**
          - If `localStorage` is not available or disabled by the user, the theme should still change for the current session, but the preference will not be saved for subsequent visits (graceful degradation).
          - If OS mode detection fails, the system should fall back to time-based detection or a site default (e.g., light theme).
          - If system time detection is inaccurate (rare), the user can manually override the theme.
          - In the unlikely event that the toggle switch UI fails to visually update its state due to a JavaScript error, the theme itself should ideally still change if the underlying logic executed.

**Wireframes & Mockups Strategy**

  - **Primary Design Tool & Link:** (Specific tool and links are to be determined and managed by the user/design team. This document will not store a direct link at this stage to maintain flexibility).
  - **Design Process:**
      - **Phase 1: Low-Fidelity Wireframes (LFW):**
          - The initial design phase will focus on creating low-fidelity wireframes.
          - These wireframes will prioritize core layout, content structure, information hierarchy, and essential user flow for all key screens and their responsive states (primarily mobile and desktop views).
          - The LFWs will serve as a blueprint to validate the information architecture, user navigation, and basic interaction models before committing to detailed visual design.
      - **Phase 2: High-Fidelity Mockups (HFM):**
          - Developed based on approved low-fidelity wireframes.
          - HFMs will fully detail the visual design, including specific typography choices, iconography systems, imagery selection and placement, and the defined color palettes for both Light and Dark themes.
          - They will precisely illustrate responsive states for all defined breakpoints (Mobile, Tablet, Desktop), showing how content reflows and components adapt.
          - Key UI component states (e.g., default, hover, active, focused, disabled) will be clearly defined.
          - HFMs will also conceptually define and illustrate key animations and transitions, particularly how GSAP might be used to create the sophisticated and engaging user experience envisioned (e.g., vertical twin scrolling, drawer menu animations, subtle interactive feedback).
  - **Key Screens for Initial Design Focus (examples based on PRD requirements):**
      - Homepage (including Hero section, summary sections with CTAs for key site areas)
      - Mapping Page (detailing the map interface, filter panel design, OOH/POI information popups/panels, and integration points for the 360-degree view)
      - Inventory List Page (covering grid/list view options, advanced filtering/sorting panel UI, and individual inventory card design)
      - Inventory Detail Page (layout for image gallery, specifications, embedded map, 360-degree viewer, CTAs, and PDF/sharing options)
      - Insight List Page (visualizing the horizontal card layout for mobile and corresponding desktop view)
      - Insight Article Detail Page (including the layout for article content and the "Reading Mode" interface)
      - Drawer Navigation Menu (appearance, link presentation, and dismiss controls)
      - Contact Us Page (layout incorporating the embedded map and contact form fields)
      - Header and Footer elements (consistent design across pages, including dark/light toggle, utility buttons, and the contact form snippet in the footer)
  - **AI Tool Prompt for Wireframes:** At the conclusion of the Design Architect session for UI/UX Specification Mode, a detailed prompt (as previously generated) will be available to assist in creating these wireframes using AI-powered wireframing tools, should the user choose to leverage them.

**Component Library / Design System Approach**

  - **Styling Foundation:** Tailwind CSS 4 will be the primary CSS framework, utilized for its utility-first approach to rapidly build custom designs. Its `dark:` variant will be essential for implementing the dark mode theme.
  - **Animation Foundation:** GSAP (GreenSock Animation Platform) will be employed for all sophisticated UI interactions, complex animations (like vertical twin scrolling), and smooth transitions, as outlined in the PRD and to be detailed in high-fidelity mockups.
  - **Component Approach:**
      - A project-specific, modular component library will be developed using React. Components will be designed for reusability across the application.
      - Components will be styled primarily using Tailwind CSS utility classes.
      - **Storybook will be utilized** as a development environment for building UI components in isolation. It will also serve as a living documentation platform for the component library, showcasing different states, props, and usage examples.
      - **Shadcn/ui Inspiration:** While not a direct dependency to be installed as a library, the architectural principles of Shadcn/ui will serve as a strong inspiration. This means focusing on creating composable, accessible components from scratch (or from unstyled primitives like those offered by Radix UI), which are then styled using Tailwind CSS. This approach provides maximum control and customization over the components, ensuring they perfectly fit the project's unique design and functional requirements, rather than being constrained by a pre-built component library's opinions.
  - **Link to Deployed Storybook / Component Showcase:** (A URL will be established and added here once Storybook is developed, built, and deployed to a publicly accessible environment).
  - **Foundational Components (Examples - to be refined, built with the above approach, and documented in Storybook):**
      - **Button:** Variations (Primary, Secondary, Tertiary/Link-style, Icon-only button); States (default, hover, active, focused, disabled, loading); Dark/Light theme adaptations.
      - **Card:** Reusable card component for Insight articles, Inventory items, Homepage summary sections; Dark/Light theme adaptations.
      - **Input Fields:** Text input, Textarea, Select dropdowns, Search input; States (default, focus, error, disabled); Dark/Light theme adaptations; Built leveraging accessible primitives.
      - **Navigation Drawer:** The main container for the drawer, navigation links, active state indication; Smooth GSAP animation for open/close transitions.
      - **Modal/Dialog:** For confirmations, quick views, or displaying additional information; Dark/Light theme adaptations; Built leveraging accessible primitives.
      - **Dark/Light Mode Toggle Switch:** Custom-styled switch with clear visual states for on/off/system.
      - **Sticky Utility Buttons:** Components for "Back to Top" and "WhatsApp Chat" buttons.
      - **Map Interaction Elements:** Custom map markers (for OOH sites, POIs), Information popups/panels displayed on map interactions, Filter controls specific to the map interface.
      - **360 Image Viewer:** A wrapper or container component for integrating a third-party 360-degree image viewing library.
      - **Breadcrumbs Component:** For displaying navigation paths.
      - **Pagination Component:** For navigating through lists of inventory or insights.
      - **Form Controls:** Standardized components for labels, error messages, and grouping form fields.
      - **Sheet/Off-canvas Panel:** May be used for filter panels on mobile or as an alternative to the main drawer for specific contexts if needed.
      - *(Further components will be identified and specified during the detailed design and development phases.)*

**Branding & Style Guide Basics**

  - **Primary Logo:** (Placeholder: Awaiting final CAESAR OOH MEDIA logo assets. High-resolution vector formats suitable for web are required). Versions adaptable to both light and dark backgrounds must be provided or created.
  - **Detailed Style Guide Development:** The comprehensive, definitive brand style guide—including finalized color palettes (primary, secondary, accents, neutrals for both themes), detailed typography scales and font pairings, the official iconography system, spacing and grid system rules, and specific imagery guidelines—will be developed and managed by the user, potentially using separate specialized AI tools or a dedicated design process. This UI/UX Specification document will align with that definitive style guide once it is established.
  - **Placeholders for this document (to be updated and aligned with the full Style Guide once developed):**
      - **Color Palette:**
          - Primary Brand Colors: `{Placeholder for main brand color(s) - Hex codes, names}`
          - Secondary Brand Colors: `{Placeholder for supporting brand color(s) - Hex codes, names}`
          - Accent Colors: `{Placeholder for colors used for CTAs, highlights, interactive elements - Hex codes, names}`
          - Neutral Grays (Light Theme): `{Placeholder for a defined range of grays for text, backgrounds, borders in light theme}`
          - Neutral Grays (Dark Theme): `{Placeholder for a defined range of grays for text, backgrounds, borders in dark theme}`
          - Feedback Colors (for messages, alerts):
              - Success: `{Placeholder for green shade}`
              - Warning: `{Placeholder for amber/yellow shade}`
              - Error: `{Placeholder for red shade}`
              - Info: `{Placeholder for blue shade}`
          - *(All selected colors must be rigorously checked to ensure they meet or exceed WCAG 2.1 AA contrast ratios for text and UI elements in both light and dark themes).*
      - **Typography:**
          - Primary Font Family (Headings): `{Placeholder for Font Name(s) and import details; e.g., Montserrat, Open Sans}`
              - Weights: `{Placeholder for specific weights to be used, e.g., Bold (700), Semi-Bold (600)}`
          - Secondary Font Family (Body & UI Text): `{Placeholder for Font Name(s) and import details; e.g., Roboto, Lato}`
              - Weights: `{Placeholder for specific weights, e.g., Regular (400), Medium (500)}`
          - Font Sizes & Line Heights: `{Placeholder for a defined typographic scale for H1, H2, H3, H4, body text, captions, labels, etc. This will be developed during the detailed visual design phase. Example: Body: 16px base, Line Height 1.5-1.7}`
      - **Iconography:**
          - Icon Style: `{Placeholder for defined style, e.g., Outline, Solid, Duotone. Must feel modern, clean, and align with the brand aesthetic.}`
          - Icon Set/Source: `{Placeholder for chosen icon library, e.g., Feather Icons, Heroicons, Material Symbols, or a custom-designed set. Link to set if applicable.}`
          - Icons should be visually consistent, pixel-perfect where possible, and provided in SVG format for scalability and styling capabilities.
      - **Spacing & Grid:**
          - Base Unit: `{Placeholder for a defined base unit for spacing, e.g., an 8px or 4px grid system. All margins, paddings, and layout spacing should be multiples of this unit to ensure consistency.}`
          - Layout Grid: `{Placeholder for standard layout columns and gutters for responsive design, e.g., a 12-column grid system for desktop views, with adaptations for tablet and mobile.}`
      - **Imagery Style:**
          - `{Placeholder for guidelines on photography and illustration style. Photographs should be high-quality, professional, and effectively showcase OOH media and company values. Consider how imagery will adapt or if alternative versions/treatments are needed for dark mode to maintain visual appeal and legibility.}`

**Accessibility (AX) Requirements**

The CAESAR OOH MEDIA website will be designed and developed to meet or exceed the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA. Accessibility will be an integral part of the entire design and development process, not an afterthought.

  - **Target Compliance:** WCAG 2.1 Level AA.
  - **General Principles (POUR):**
      - **Perceivable:** Information and user interface components must be presentable to users in ways they can perceive.
          - Provide text alternatives (e.g., `alt` text) for all non-text content, including images and icons that convey meaning. Decorative images should have empty alt attributes.
          - Ensure sufficient color contrast between text and its background, as well as for meaningful UI components and graphical elements, in both light and dark themes (minimum 4.5:1 for normal text and UI components, 3:1 for large text [18pt or 14pt bold]).
          - Content must be resizable up to 200% using browser zoom without loss of content or functionality, and without requiring horizontal scrolling for full-width content.
          - Do not rely solely on color to convey information, indicate an action, prompt a response, or distinguish a visual element.
      - **Operable:** User interface components and navigation must be operable by all users.
          - All functionality must be available and operable through a keyboard interface, without requiring a mouse.
          - Provide clearly visible focus indicators for all interactive elements when they receive keyboard focus.
          - Ensure users have enough time to read and use content; avoid timed interactions where possible or provide mechanisms to extend time.
          - Avoid content that flashes more than three times in any one-second period, or ensure the flash is below the general flash and red flash thresholds.
          - Implement a logical and predictable tab order for interactive elements on all pages.
      - **Understandable:** Information and the operation of the user interface must be understandable to users.
          - Ensure text is readable (sufficient font size, line height, letter spacing) and understandable (clear language, explanations for jargon or abbreviations).
          - Make web pages appear and operate in predictable ways; navigation and interactive elements should behave consistently.
          - Help users avoid and correct mistakes by providing clear error messages, input assistance, and, where appropriate, mechanisms for undoing actions.
      - **Robust:** Content must be robust enough that it can be interpreted reliably by a wide variety of user agents, including current and future assistive technologies.
          - Use valid HTML according to specification.
          - Use ARIA attributes correctly and only where necessary to enhance the semantics of custom interactive components.
  - **Specific Requirements based on PRD & Features:**
      - **Semantic HTML:** Utilize appropriate HTML5 elements for their intended structural purpose (e.g., `<nav>`, `<main>`, `<aside>`, `<article>`, `<section>`, `<button>`, `<header>`, `<footer>`, appropriate heading levels `<h1>`-`<h6>`).
      - **ARIA Implementation:**
          - **Drawer Navigation:** Ensure proper ARIA attributes for states (e.g., `aria-expanded`, `aria-hidden`), roles (e.g., `dialog` if it behaves like one, `menu` if appropriate), and controls. Implement focus trapping within the open drawer.
          - **Modals/Dialogs:** Use ARIA roles (`dialog` or `alertdialog`), `aria-modal="true"`, manage focus trapping, and provide accessible names via `aria-labelledby` or `aria-label`.
          - **Custom Components (built with Tailwind/GSAP):** Components like custom dropdowns, carousels/image galleries, interactive map elements, and custom toggles must have appropriate ARIA roles, states, and properties to convey their function and current state to assistive technologies.
          - **Data Tables/Grids (Inventory Page, if applicable):** Use appropriate HTML table markup (`<table>`, `<thead>`, `<tbody>`, `<th>` with `scope` attributes, `<caption>`) or ARIA grid roles for complex data presentation if a table structure is used.
          - **Form Controls:** All form inputs must have programmatically associated labels (using `<label for="...">` or `aria-labelledby`). Group related controls using `<fieldset>` and `<legend>`. Error messages should be programmatically associated with their respective inputs using `aria-describedby` or `aria-invalid` and `aria-errormessage`.
      - **Keyboard Navigation:**
          - All interactive elements (links, buttons, form fields, custom controls, map markers where feasible) must be focusable and operable using the keyboard (Tab/Shift+Tab for navigation, Enter/Space for activation, Arrow keys for navigating within composite widgets like carousels or custom selects).
          - Drawer menu items, modal actions, filters, and pagination controls must be fully keyboard navigable.
      - **Focus Management:**
          - Implement clearly visible focus indicators on all interactive elements, ensuring they meet color contrast requirements against their background.
          - For modals, drawers, and other overlay components, keyboard focus must be programmatically trapped within the component when it is active.
          - Upon closing such components, focus must be returned to the element that originally triggered their opening.
          - For dynamically loaded content or significant UI changes (e.g., search results appearing on the map or inventory page), manage focus appropriately (e.g., by moving focus to the new content container or providing an announcement).
      - **Dark/Light Mode:** Both themes must independently meet all color contrast requirements. Ensure that text and interactive elements are clearly distinguishable in both modes.
      - **Mapping Page:**
          - Strive to make map markers keyboard-focusable and operable if the chosen map library supports it.
          - Provide a list-based alternative view or a mechanism to navigate through OOH sites displayed on the map for users who cannot easily interact with the visual map.
          - Ensure all filter controls, information popups, and interactive tools on the map page are fully keyboard accessible and screen-reader friendly.
          - Provide text alternatives or ARIA labels for critical map content or controls where visual understanding is key.
      - **Inventory Page:**
          - Ensure all filter and sort controls are accessible.
          - Image galleries (horizontal swiping on mobile, carousels on desktop) must have keyboard controls (e.g., arrow keys, tab to navigation buttons) and ARIA labels for navigation elements.
          - PDF download, print, email, and WhatsApp sharing options must be clearly labeled and keyboard operable.
      - **Insight Page:**
          - Articles must use proper heading structure (`<h1>` for the main title, `<h2>`, `<h3>`, etc., for subheadings) to facilitate navigation.
          - The "Reading Mode," if implemented, must maintain or enhance accessibility (e.g., by improving contrast, simplifying layout, allowing font adjustments) and not introduce new barriers.
      - **GSAP Animations & Twin Scrolling:**
          - Respect the `prefers-reduced-motion` CSS media query. If this query evaluates to `reduce`, non-essential animations (including GSAP-driven ones like vertical twin scrolling) should be disabled or significantly reduced.
          - Ensure that animations do not cause accessibility issues such as vestibular motion triggers (e.g., excessive parallax or rapid movement).
          - Twin scrolling and other complex scroll-based animations must not trap keyboard focus or disrupt the logical reading order for screen reader users. Content revealed or manipulated via scrolling should still be present in the DOM in a coherent order.
      - **Sticky Utility Buttons (Back to Top, WhatsApp):** Ensure they are keyboard focusable, have accessible names, and do not obscure other page content, especially when the page is zoomed.
  - **Testing Tools for AX:**
      - **Automated:** Integrate `axe-core` into unit/integration tests (e.g., with Jest and React Testing Library) and E2E tests (e.g., with Playwright) for continuous accessibility checking. Use browser developer tools like Lighthouse for audits.
      - **Manual:** Conduct thorough manual testing, including keyboard-only navigation across all pages and interactive elements, testing with various screen readers (e.g., NVDA, VoiceOver, JAWS) on different browsers, and using color contrast checking tools.

**Responsiveness Strategy**

The website will be designed and developed using a mobile-first responsive approach to ensure an optimal user experience across a wide range of devices, from mobile phones to tablets and desktops.

  - **Approach:** Mobile-first. The design and styling process will begin with the smallest viewport (mobile), establishing a solid foundation for content, layout, and functionality. Enhancements and layout adjustments will then be progressively added for larger breakpoints (tablet, desktop).
  - **Key Breakpoints (based on common device widths and alignable with Tailwind CSS defaults; these can be customized further during development):**
      - **Mobile (Default):** `0px` up to `639px` (Tailwind's `sm` breakpoint starts at `640px`, so this covers viewports smaller than `sm`).
          - Layouts will primarily be single-column to optimize for narrow screens.
          - Navigation and controls will be designed to be touch-friendly and easily accessible.
          - The Drawer navigation will be the primary menu system.
          - Horizontal swiping will be implemented for image galleries (e.g., in Inventory Detail pages) and potentially for card carousels (e.g., Insight article list).
      - **Tablet (Small to Medium):** `640px` (Tailwind `sm`) up to `1023px` (Tailwind `lg` starts at `1024px`).
          - May introduce two-column layouts for some content sections where appropriate.
          - Increased spacing and potentially larger tap targets compared to mobile.
          - Drawer navigation is likely still the preferred primary menu, or a compact version of the header menu might be considered.
      - **Desktop (Large):** `1024px` (Tailwind `lg`) and upwards.
          - Wider layouts, utilizing multi-column designs (e.g., two, three, or more columns as appropriate for the content).
          - Full header navigation may be displayed (though the PRD allows for optionally retaining the drawer for a cleaner look on desktop).
          - Enhanced hover interactions and more complex visual presentations can be utilized.
          - Sophisticated interactions like Vertical Twin Scrolling effects are primarily targeted for this viewport range.
      - **(Optional) XL Desktop:** `1280px` (Tailwind `xl`) or `1536px` (Tailwind `2xl`) and upwards.
          - For very large screens, the design may utilize even wider layouts, increased margins, or larger visual elements if the content and design aesthetics benefit from it, ensuring content remains comfortable to read and interact with.
  - **Adaptation Strategy:**
      - **Layouts:** Utilize CSS Grid and Flexbox extensively for creating fluid and adaptable layouts that reflow gracefully across breakpoints. Tailwind CSS's responsive prefixes (e.g., `sm:`, `md:`, `lg:`, `xl:`) will be used pervasively for applying breakpoint-specific styles.
      - **Navigation:**
          - **Header:** The header structure (Logo, Menu Toggle for mobile/tablet, Dark/Light Mode Switch) will adapt. On desktop, main navigation links might be displayed directly in the header or still accessed via the menu toggle for a cleaner aesthetic.
          - **Drawer Menu:** Will typically be full height or cover a significant portion of the screen on mobile. On desktop, if used, it might appear as a fixed-width panel.
          - **Footer:** Content within the footer (contact form snippet, contact details, map snippet, social links) will stack vertically on mobile and arrange into columns on larger screens. The compact contact form will need careful responsive design to remain usable on all screen sizes.
      - **Typography:** Font sizes, line heights, and margins for typographic elements may adjust slightly across breakpoints (responsive typography) to maintain optimal readability and visual hierarchy.
      - **Images:** Implement responsive images using the `<picture>` element or the `srcset` and `sizes` attributes of the `<img>` tag (or via `next/image` component which handles this) to serve appropriately sized and optimized images for different viewports and device resolutions. Lazy loading will be standard for off-screen images.
      - **Data Heavy Sections (Map, Inventory):**
          - **Mapping Page:** Filter panels might be implemented as full-screen modals or slide-in panels on mobile devices, transitioning to sidebars or integrated panels on desktop. Map interaction tools and information popups must be designed to be easily accessible and usable on all screen sizes.
          - **Inventory List:** Inventory item cards/list items will stack vertically on mobile. The advanced filtering and sorting UI will adapt (e.g., displayed in a modal or sheet on mobile, and as a sidebar or prominent top bar section on desktop).
      - **Interactive Elements:**
          - **Horizontal Swiping (Mobile):** Confirmed for image galleries in Inventory Detail pages and for the Insight article cards list. Clear visual affordances (e.g., partial visibility of next/previous items, pagination dots) should indicate swipability. These will primarily be single-finger swipe interactions.
          - **Vertical Twin Scrolling (Desktop):** This advanced GSAP-driven effect will be applied to specific content-rich pages or sections (e.g., parts of the Homepage, Inventory detail pages, Insight articles) as determined by the detailed visual design. This effect will likely be disabled on mobile and tablet viewports to prioritize performance, simpler interaction models, and avoid potential usability issues on smaller screens.
      - **Touch Targets:** Ensure that all interactive elements (buttons, links, form controls, custom toggles) have adequate touch target sizes on mobile and tablet devices (e.g., meeting or exceeding a minimum of 44x44 CSS pixels) to prevent accidental taps and improve usability.
      - **Advanced Touch Interactions (Primarily for Map and 360 Viewer components):**
          - **Standard Gestures:**
              - **Single Tap/Click:** For standard selection, activation of controls.
              - **Drag/Pan (Single Finger):** For navigating the map, scrolling through overflowing content.
              - **Swipe (Single Finger):** For navigating carousels, dismissing the drawer menu (if designed as such), switching between tabs if applicable.
          - **Multi-Touch Gestures (Context-Dependent, especially on Map and 360 Views):**
              - **Pinch-to-Zoom (Two Fingers):** Standard for zooming in and out on interactive maps and potentially on 360-degree images. The interaction must feel smooth, responsive, and natural.
              - **Two-Finger Pan/Scroll:** May be used by underlying map libraries as an alternative to or in conjunction with single-finger pan, or for specific interactions within complex components.
              - **Two-Finger Rotate:** If the chosen map library or 360-degree viewer supports rotation via touch, this gesture might be enabled.
              - **Multi-Finger Taps/Gestures (3+ fingers):** Custom web application gestures beyond two fingers are generally rare due to complexity, potential conflicts with operating system or browser-level gestures, and limited intuitive use cases. For this project, the primary focus will be on robust single and two-finger gestures. Custom multi-finger gestures (3-5 fingers) are considered **out of scope for V1** unless a very specific, high-value, and non-conflicting use case is identified and approved for a particular core component (e.g., a specialized interaction within the map component if provided by the chosen map library and deemed essential for the user experience).
          - **Gesture Handling:**
              - Interactions should be designed to be elegant and intuitive, avoiding conflicts between different gestures (e.g., a vertical swipe to scroll the page vs. a horizontal swipe within a carousel).
              - Visual feedback during gesture interactions (e.g., the map zooming around the pinch center point) is important for user understanding.
              - Gesture handling must be performant to avoid jank, lag, or unresponsiveness.
              - For complex components like maps (e.g., Mapbox GL JS) or potential 360-degree viewer libraries, their built-in gesture handling capabilities will be leveraged and configured for an optimal user experience.
              - Any custom gesture implementation (if absolutely necessary) will be carefully considered and thoroughly tested to avoid interference with native browser or operating system gestures.
      - **Testing:** The website must be tested thoroughly on a range of real devices (smartphones, tablets) and emulators across all defined breakpoints to ensure consistent appearance, functionality, and usability. This includes testing different orientations (portrait and landscape).

**Change Log**

| Change        | Date          | Version | Description                                                                      | Author         |
| :------------ | :------------ | :------ | :------------------------------------------------------------------------------- | :------------- |
| Initial Draft | May 17, 2025  | 1.0     | First full draft of UI/UX Specification based on user inputs and template structure. | Design Architect |