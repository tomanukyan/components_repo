<template>
  <div class="showcase">
    <h1>Element Plus Component Showcase</h1>

    <!-- Buttons -->
    <section class="section">
      <h2>Buttons</h2>
      <div class="row">
        <el-button type="primary">Primary</el-button>
        <el-button type="success">Success</el-button>
        <el-button type="warning">Warning</el-button>
        <el-button type="danger">Danger</el-button>
        <el-button type="info">Info</el-button>
        <el-button>Default</el-button>
      </div>
      <div class="row">
        <el-button type="primary" plain>Primary Plain</el-button>
        <el-button type="success" plain>Success Plain</el-button>
        <el-button type="warning" plain>Warning Plain</el-button>
        <el-button type="danger" plain>Danger Plain</el-button>
        <el-button type="info" plain>Info Plain</el-button>
      </div>
      <div class="row">
        <el-button type="primary" round>Round</el-button>
        <el-button type="primary" circle>+</el-button>
        <el-button type="primary" disabled>Disabled</el-button>
        <el-button type="primary" loading>Loading</el-button>
      </div>
    </section>

    <!-- Inputs -->
    <section class="section">
      <h2>Inputs</h2>
      <div class="row">
        <el-input v-model="inputText" placeholder="Text input" style="width: 200px" />
        <el-input v-model="inputText" placeholder="With icon" prefix-icon="Search" style="width: 200px" />
        <el-input v-model="inputText" placeholder="Clearable" clearable style="width: 200px" />
      </div>
      <div class="row">
        <el-input
          v-model="textareaText"
          type="textarea"
          placeholder="Textarea input"
          :rows="3"
          style="width: 400px"
        />
      </div>
    </section>

    <!-- Select -->
    <section class="section">
      <h2>Select</h2>
      <div class="row">
        <el-select v-model="selectValue" placeholder="Select an option" style="width: 200px">
          <el-option label="Option 1" value="1" />
          <el-option label="Option 2" value="2" />
          <el-option label="Option 3" value="3" />
          <el-option label="Option 4" value="4" disabled />
        </el-select>
        <el-select v-model="multiSelectValue" multiple placeholder="Multi-select" style="width: 300px">
          <el-option label="Apple" value="apple" />
          <el-option label="Banana" value="banana" />
          <el-option label="Orange" value="orange" />
          <el-option label="Grape" value="grape" />
        </el-select>
      </div>
    </section>

    <!-- Checkbox & Radio -->
    <section class="section">
      <h2>Checkbox & Radio</h2>
      <div class="row">
        <el-checkbox-group v-model="checkedItems">
          <el-checkbox label="Option A" value="a" />
          <el-checkbox label="Option B" value="b" />
          <el-checkbox label="Option C" value="c" />
          <el-checkbox label="Disabled" value="d" disabled />
        </el-checkbox-group>
      </div>
      <div class="row">
        <el-radio-group v-model="radioValue">
          <el-radio value="1">Radio 1</el-radio>
          <el-radio value="2">Radio 2</el-radio>
          <el-radio value="3">Radio 3</el-radio>
          <el-radio value="4" disabled>Disabled</el-radio>
        </el-radio-group>
      </div>
    </section>

    <!-- Switch -->
    <section class="section">
      <h2>Switch</h2>
      <div class="row">
        <el-switch v-model="switchValue1" />
        <el-switch v-model="switchValue2" active-text="On" inactive-text="Off" />
        <el-switch v-model="switchValue3" disabled />
      </div>
    </section>

    <!-- Alerts -->
    <section class="section">
      <h2>Alerts</h2>
      <el-alert title="Success alert" type="success" show-icon />
      <el-alert title="Warning alert" type="warning" show-icon />
      <el-alert title="Error alert" type="error" show-icon />
      <el-alert title="Info alert" type="info" show-icon />
    </section>

    <!-- Card -->
    <section class="section">
      <h2>Card</h2>
      <div class="row">
        <el-card style="width: 300px">
          <template #header>
            <span>Card Header</span>
          </template>
          <p>Card content goes here. This demonstrates the card component with our custom theme applied.</p>
        </el-card>
        <el-card shadow="hover" style="width: 300px">
          <template #header>
            <span>Hover Shadow</span>
          </template>
          <p>This card has hover shadow effect.</p>
        </el-card>
      </div>
    </section>

    <!-- Form -->
    <section class="section">
      <h2>Sample Form</h2>
      <el-card style="max-width: 500px">
        <el-form :model="form" label-width="100px">
          <el-form-item label="Name">
            <el-input v-model="form.name" placeholder="Enter your name" />
          </el-form-item>
          <el-form-item label="Email">
            <el-input v-model="form.email" type="email" placeholder="Enter your email" />
          </el-form-item>
          <el-form-item label="Role">
            <el-select v-model="form.role" placeholder="Select role" style="width: 100%">
              <el-option label="Admin" value="admin" />
              <el-option label="User" value="user" />
              <el-option label="Guest" value="guest" />
            </el-select>
          </el-form-item>
          <el-form-item label="Newsletter">
            <el-switch v-model="form.newsletter" />
          </el-form-item>
          <el-form-item label="Interests">
            <el-checkbox-group v-model="form.interests">
              <el-checkbox label="Tech" value="tech" />
              <el-checkbox label="Design" value="design" />
              <el-checkbox label="Business" value="business" />
            </el-checkbox-group>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">Submit</el-button>
            <el-button>Cancel</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const inputText = ref('')
const textareaText = ref('')
const selectValue = ref('')
const multiSelectValue = ref([])
const checkedItems = ref(['a', 'b'])
const radioValue = ref('1')
const switchValue1 = ref(true)
const switchValue2 = ref(false)
const switchValue3 = ref(true)

const form = reactive({
  name: '',
  email: '',
  role: '',
  newsletter: false,
  interests: []
})
</script>

<style scoped>
.showcase {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  margin-bottom: 2rem;
  color: var(--el-text-color-primary);
}

.section {
  margin-bottom: 2.5rem;
}

.section h2 {
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--el-border-color-light);
  color: var(--el-text-color-primary);
}

.row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1rem;
}

.el-alert {
  margin-bottom: 0.75rem;
}
</style>
