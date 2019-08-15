<template>
    <div>
        <base-header class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center">
            <!-- Mask -->
            <span class="mask bg-gradient-dark opacity-8"></span>
            <!-- Header container -->
            <div class="container-fluid d-flex align-items-center">
                <div>
                    <b-carousel
                        id="carousel-1"
                        v-model="slide"
                        :interval="4000"
                        controls
                        indicators
                        background="#ababab"
                        img-width="1024"
                        img-height="480"
                        style="text-shadow: 1px 1px 2px #333;"
                        @sliding-start="true"
                        @sliding-end="false"
                        >
                        <!-- Text slides with image -->
                        <b-carousel-slide
                            caption="First slide"
                            text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                            img-src="https://picsum.photos/1024/480/?image=52"
                        ></b-carousel-slide>

                        <!-- Slides with custom text -->
                        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
                            <h1>Hello world!</h1>
                        </b-carousel-slide>

                        <!-- Slides with image only -->
                        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

                        <!-- Slides with img slot -->
                        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
                        <b-carousel-slide>
                            <img
                            slot="img"
                            class="d-block img-fluid w-100"
                            width="1024"
                            height="480"
                            src="https://picsum.photos/1024/480/?image=55"
                            alt="image slot"
                            >
                        </b-carousel-slide>

                        <!-- Slide with blank fluid image to maintain slide aspect ratio -->
                        <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
                            a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
                            </p>
                        </b-carousel-slide>
                        </b-carousel>

                </div>
            </div>
        </base-header>

        <div class="container-fluid mt--7">
            <div class="row">
                <div class="col-xl-12 order-xl-1">
                    <card shadow type="secondary">
                        <div slot="header" class="bg-white border-0">
                            <div class="row align-items-center">
                                <div class="col-8">
                                    <h3 class="mb-0">Documentos</h3>
                                </div>
                                <div class="col-4 text-right">
                                    <a href="#!" class="btn btn-sm btn-primary">Settings</a>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xl-3 col-lg-6">
                                <stats-card title="Total traffic"
                                            type="gradient-red"
                                            sub-title="350,897"
                                            icon="ni ni-active-40"
                                            class="mb-4 mb-xl-0"
                                >

                                    <template slot="footer">
                                        <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 3.48%</span>
                                        <span class="text-nowrap">Since last month</span>
                                    </template>
                                </stats-card>
                            </div>
                            <div class="col-xl-3 col-lg-6">
                                <stats-card title="Total traffic"
                                            type="gradient-orange"
                                            sub-title="2,356"
                                            icon="ni ni-chart-pie-35"
                                            class="mb-4 mb-xl-0"
                                >

                                    <template slot="footer">
                                        <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 12.18%</span>
                                        <span class="text-nowrap">Since last month</span>
                                    </template>
                                </stats-card>
                            </div>
                            <div class="col-xl-3 col-lg-6">
                                <stats-card title="Sales"
                                            type="gradient-green"
                                            sub-title="924"
                                            icon="ni ni-money-coins"
                                            class="mb-4 mb-xl-0"
                                >

                                    <template slot="footer">
                                        <span class="text-danger mr-2"><i class="fa fa-arrow-down"></i> 5.72%</span>
                                        <span class="text-nowrap">Since last month</span>
                                    </template>
                                </stats-card>

                            </div>
                            <div class="col-xl-3 col-lg-6">
                                <stats-card title="Performance"
                                            type="gradient-info"
                                            sub-title="49,65%"
                                            icon="ni ni-chart-bar-32"
                                            class="mb-4 mb-xl-0"
                                >

                                    <template slot="footer">
                                        <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 54.8%</span>
                                        <span class="text-nowrap">Since last month</span>
                                    </template>
                                </stats-card>
                            </div>
                        </div>
                    </card>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
    name: 'user-profile',
    data() {
      return {
        model: {
          username: '',
          email: '',
          firstName: '',
          lastName: '',
          address: '',
          city: '',
          country: '',
          zipCode: '',
          about: '',
        }
      }
    },
  };
</script>
<style></style>
