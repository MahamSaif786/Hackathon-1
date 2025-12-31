// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Module 1: The Robotic Nervous System (ROS 2)',
      items: [
        'module-1-ros2/chapter-1-introduction',
        'module-1-ros2/chapter-2-core-concepts',
        'module-1-ros2/chapter-3-ai-urdf',
      ],
    },
    {
      type: 'category',
      label: 'Module 2: The Digital Twin (Gazebo & Unity)',
      items: [
        'module-2-digital-twin/chapter-1-digital-twins',
        'module-2-digital-twin/chapter-2-gazebo-physics',
        'module-2-digital-twin/chapter-3-unity-visualization',
        'module-2-digital-twin/chapter-4-simulated-sensors',
      ],
    },
    {
      type: 'category',
      label: 'Module 3: The AI-Robot Brain (NVIDIA Isaac)',
      items: [
        'module-3-ai-robot-brain/chapter-1-ai-brain-intro',
        'module-3-ai-robot-brain/chapter-2-isaac-sim',
        'module-3-ai-robot-brain/chapter-3-isaac-ros-perception',
        'module-3-ai-robot-brain/chapter-4-navigation-nav2',
        'module-3-ai-robot-brain/chapter-5-sim-to-real',
      ],
    },
    {
      type: 'category',
      label: 'Module 4: Vision-Language-Action (VLA)',
      items: [
        'module-4-vision-language-action/introduction-to-vla',
        'module-4-vision-language-action/voice-to-action',
        'module-4-vision-language-action/cognitive-planning-llms',
        'module-4-vision-language-action/language-to-ros-actions',
        'module-4-vision-language-action/multimodal-perception',
        'module-4-vision-language-action/capstone-autonomous-humanoid',
      ],
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
