<template>
  <div class="max-w-4xl mx-auto p-8">
    <h1 class="text-2xl font-bold text-gray-800 mb-8">@mulmochat-plugin/ui-image Demo</h1>

    <!-- Sample Selection -->
    <div class="bg-white rounded-lg p-5 mb-5 shadow-md">
      <h2 class="text-gray-600 text-xl mb-4">Select Sample Image</h2>
      <div class="flex flex-wrap gap-3">
        <button
          v-for="sample in samples"
          :key="sample.name"
          @click="loadSample(sample)"
          class="py-2 px-4 bg-indigo-100 text-indigo-700 rounded-md hover:bg-indigo-200 transition-colors"
          :class="{ 'ring-2 ring-indigo-500': currentSample === sample.name }"
        >
          {{ sample.name }}
        </button>
      </div>
    </div>

    <!-- ImageView Component -->
    <div class="bg-white rounded-lg p-5 mb-5 shadow-md">
      <h2 class="text-gray-600 text-xl mb-4">ImageView Component</h2>
      <div class="border border-gray-200 rounded p-4 h-[400px]">
        <ImageView :selectedResult="result" />
      </div>
    </div>

    <!-- ImagePreview Component -->
    <div class="bg-white rounded-lg p-5 mb-5 shadow-md">
      <h2 class="text-gray-600 text-xl mb-4">ImagePreview Component</h2>
      <div class="max-w-[200px] border border-gray-200 rounded p-2">
        <ImagePreview :result="result" />
      </div>
    </div>

    <!-- Current Result Data -->
    <div class="bg-white rounded-lg p-5 mb-5 shadow-md">
      <h2 class="text-gray-600 text-xl mb-4">Current Result Data</h2>
      <pre class="bg-gray-100 p-3 rounded overflow-x-auto text-xs">{{ JSON.stringify(result, null, 2) }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { ImageView, ImagePreview } from "../src";
import type { ToolResult, ImageToolData } from "../src/types";

interface Sample {
  name: string;
  imageData: string;
  prompt: string;
}

const samples: Sample[] = [
  {
    name: "Nature",
    imageData: "https://picsum.photos/id/10/400/300",
    prompt: "A beautiful nature landscape",
  },
  {
    name: "City",
    imageData: "https://picsum.photos/id/26/400/300",
    prompt: "Urban cityscape",
  },
  {
    name: "Architecture",
    imageData: "https://picsum.photos/id/42/400/300",
    prompt: "Modern architecture",
  },
  {
    name: "No Image",
    imageData: "",
    prompt: "",
  },
];

const imageData = ref(samples[0].imageData);
const prompt = ref(samples[0].prompt);
const currentSample = ref(samples[0].name);

const result = computed<ToolResult<ImageToolData>>(() => ({
  toolName: "generateImage",
  message: imageData.value ? "Image loaded" : "No image",
  data: {
    imageData: imageData.value,
    prompt: prompt.value,
  },
}));

const loadSample = (sample: Sample) => {
  imageData.value = sample.imageData;
  prompt.value = sample.prompt;
  currentSample.value = sample.name;
};
</script>
