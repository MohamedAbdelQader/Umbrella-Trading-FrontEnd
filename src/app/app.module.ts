import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./Components/account/login/login.component";
import { MarketerSignUpComponent } from "./Components/account/marketer-sign-up/marketer-sign-up.component";
import { ProfileComponent } from "./Components/account/profile/profile.component";
import { UpdateprofileComponent } from "./Components/account/updateprofile/updateprofile.component";
import { UserProfileComponent } from "./Components/account/userprofile/userprofile.component";
import { UsersignupComponent } from "./Components/account/usersignup/usersignup.component";
import { CodeProductsComponent } from "./Components/code-products/code-products.component";
import { HomepageComponent } from "./Components/homepage/homepage.component";
import { AddcollectionComponent } from "./Components/Marketer/addcollection/addcollection.component";
import { AllCollectionComponent } from "./Components/Marketer/all-collection/all-collection.component";
import { CollectionProductsComponent } from "./Components/Marketer/collection-products/collection-products.component";
import { CollectionComponent } from "./Components/Marketer/collection/collection.component";
import { GetCollectionsComponent } from "./Components/Marketer/get-collections/get-collections.component";
import { MarketerHomeComponent } from "./Components/Marketer/marketer-home/marketer-home.component";
import { MarketerWalletComponent } from "./Components/Marketer/marketer-wallet/marketer-wallet.component";
import { CartComponent } from "./Components/Products/cart/cart.component";
import { FavouriteComponent } from "./Components/Products/favourite/favourite.component";
import { OrderHistoryComponent } from "./Components/Products/order-history/order-history.component";
import { OrderComponent } from "./Components/Products/order/order.component";
import { ProductDetailsComponent } from "./Components/Products/product-details/product-details.component";
import { ProductListComponent } from "./Components/Products/product-list/product-list.component";
import { IntroComponent } from "./intro/intro.component";
import { MarketerMainLayoutComponent } from "./layout/marketer/marketer-main-layout/marketer-main-layout.component";
import { SideNavTogglerComponent } from "./layout/marketer/side-nav-toggler/side-nav-toggler.component";
import { SideNavComponent } from "./layout/marketer/side-nav/side-nav.component";
import { TopNavComponent } from "./layout/marketer/top-nav/top-nav.component";
import { PageContentComponent } from "./layout/page-content/page-content.component";
import { NavComponent } from "./layout/user/nav/nav.component";
import { UserMainLayoutComponent } from "./layout/user/user-main-layout/user-main-layout.component";
import { SharedModule } from "./shard/shared.module";
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PageContentComponent,
    //marketer
    SideNavComponent,
    SideNavTogglerComponent,
    TopNavComponent,
    MarketerMainLayoutComponent,
    MarketerSignUpComponent,
    GetCollectionsComponent,
    ProfileComponent,
    CollectionProductsComponent,
    CollectionComponent,
    MarketerWalletComponent,
    AddcollectionComponent,
    AllCollectionComponent,
    CollectionProductsComponent,
    /////USER
    NavComponent,
    UserMainLayoutComponent,
    UsersignupComponent,
    LoginComponent,
    UserProfileComponent,
    UpdateprofileComponent,
    CartComponent,
    FavouriteComponent,
    ProductDetailsComponent,
    ProductListComponent,
    MarketerHomeComponent,
    IntroComponent,
    CodeProductsComponent,
    OrderHistoryComponent,
    OrderComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgxPaginationModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
