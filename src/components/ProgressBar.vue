<template>
  <div class="progress-pie-chart">
    <div class="ppc-progress">
      <div class="ppc-progress-fill"></div>
    </div>
    <div class="ppc-percents">
      <div class="pcc-percents-wrapper">
        <span>{{ percentage }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: ['percentage'],
  mounted() {
    const $ppc = document.querySelector('.progress-pie-chart');
    const deg = (360 * this.percentage) / 100;
    if (this.percentage > 50) {
      $ppc.className += 'gt-50';
    }
    document.querySelector('.ppc-progress-fill').style.transform = `rotate(${deg}deg)`;
  }
};
</script>

<style lang="scss" scoped>
@mixin circle($size) {
  content: "";
  position: absolute;
  border-radius: 50%;
  left: calc(50% - #{$size/2});
  top: calc(50% - #{$size/2});
  width: $size;
  height: $size;
}

$size: 60px;

.progress-pie-chart {
  width: $size;
  height: $size;
  border-radius: 50%;
  background-color: #E5E5E5;
  position: relative;
  
  &.gt-50 {
    background-color: #15d3cd;
  }
}

.ppc-progress {
  @include circle($size);
  clip: rect(0, $size, $size, #{$size/2});
  
  .ppc-progress-fill {
    @include circle($size);
    clip: rect(0, #{$size/2}, $size, 0);
    background: #15d3cd;
    transform: rotate(60deg);
  }
  
  .gt-50 & {
    clip: rect(0, #{$size/2}, $size, 0);
    
    .ppc-progress-fill {
      clip: rect(0, $size, $size, #{$size/2});
      background: #E5E5E5;
    }
  }
}

.ppc-percents {
  @include circle(#{$size/1.15});
  background: #fff;
  text-align: center;
  display: table;

  span {
    display: block;
    font-weight: bold;
  }
}

.pcc-percents-wrapper {
  display: table-cell;
  vertical-align: middle;
}
</style>
