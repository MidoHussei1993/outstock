<template>
   <div class="your-order mb-30 ">
        <h3>Your order</h3>
        <div class="your-order-table table-responsive">
            <table>
                <thead>
                    <tr>
                        <th class="product-name">Product</th>
                        <th class="product-total">Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item,i) in state.cart_products" :key="i" class="cart_item">
                        <td class="product-name">
                            {{item.title}} <strong class="product-quantity"> × {{item.orderQuantity}}</strong>
                        </td>
                        <td class="product-total">
                            <span class="amount">${{item.price}}</span>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr class="cart-subtotal">
                        <th>Cart Subtotal</th>
                        <td><span class="amount">${{state.totalPriceQuantity.total.toFixed(2)}}</span></td>
                    </tr>
                    <tr class="shipping">
                        <th>Shipping</th>
                        <td>
                            <ul>
                                <li>
                                    <input v-model="ship_cost" :value="7.00" id="flat-rate" name="ship-cost" type="radio" />
                                    <label for="flat-rate">
                                        Flat Rate: <span class="amount">$7.00</span>
                                    </label>
                                </li>
                                <li>
                                    <input v-model="ship_cost" id="free" value="free" name="ship-cost" type="radio" />
                                    <label for="free">Free Shipping:</label>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr class="order-total">
                        <th>Order Total</th>
                        <td>
                         <strong>
                            <span class="amount">
                               ${{typeof ship_cost === 'number' && ship_cost > 0 ? 
                               (state.totalPriceQuantity.total + ship_cost).toFixed(2) 
                               : state.totalPriceQuantity.total.toFixed(2)}}
                            </span>
                        </strong>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>

        <div class="payment-method">
            <div class="accordion" id="accordionExample">
                <div class="card">
                    <div class="card-header" id="headingOne">
                        <h5 class="mb-0">
                            <button class="btn-link" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="true"
                                aria-controls="collapseOne">
                                Direct Bank Transfer
                            </button>
                        </h5>
                    </div>

                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample">
                        <div class="card-body">
                            Make your payment directly into our bank account. Please use your Order ID
                            as the payment
                            reference. Your order won’t be
                            shipped until the funds have cleared in our account.
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingTwo">
                        <h5 class="mb-0">
                            <button class="btn-link collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo" aria-expanded="false"
                                aria-controls="collapseTwo">
                                Cheque Payment
                            </button>
                        </h5>
                    </div>
                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample">
                        <div class="card-body">
                            Please send your cheque to Store Name, Store Street, Store Town, Store
                            State / County, Store
                            Postcode.
                        </div>
                    </div>
                </div>
            </div>
            <div class="order-button-payment mt-20">
                <button type="submit" class="os-btn os-btn-black">Place order</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useCartStore } from '~~/store/useCart';

export default defineComponent({
    data() {
        return {
            ship_cost:0
        }
    },
    setup () {
     const state = useCartStore()
      return {state}
    }
})
</script>
