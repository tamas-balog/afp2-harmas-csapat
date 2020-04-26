# REST API documentation

<table>
    <tr>
        <th colspan="2">StaffLogin</th>
    </tr>
    <tr>
        <td>Description</td>
        <td>Staff can login into the system.</td>
    </tr>
    <tr>
        <td>Request</td>
        <td>POST</td>
    </tr>
    <tr>
        <td>Path</td>
        <td>/staff/login</td>
    </tr>
    <tr>
        <td>
            Request body
        </td>
        <td>

```json
{
    "email":"String",
    "password":"String"
}
```

</td>
    </tr>
    <tr>
        <td>Response OK</td>
        <td>

```json
{
    "code":200,
    "message":"Successful login"
}
```

</td>
    </tr>
    <tr>
        <td>Response error</td>
        <td>

```json
{
    "error":{
        "code":401,
        "message":"Login Required"
    }
}
```

</td>
    </tr>
    <tr>
        <td>Example</td>
        <td>
        curl --header "Content-Type: application/json" \<br>
        --request POST \<br>
        --data '{"email":"john.smith@example.com","password":"xyz123"}' \<br>
        http://pizzaoldal.hu/staff/login
        </td>
    </tr>
</table>

<table>
    <tr>
        <th colspan="2">GetStaffList</th>
    </tr>
    <tr>
        <td>Description</td>
        <td>Manager can list staff members.</td>
    </tr>
    <tr>
        <td>Request</td>
        <td>GET</td>
    </tr>
    <tr>
        <td>Path</td>
        <td>/staff</td>
    </tr>
    <tr>
        <td>
            Response OK
        </td>
        <td>

```json
{
    "code":200,
    "data":{
        "employees":[
            {
                "id":"UUID",
                "positionCode":"Int",
                "firstName":"String",
                "lastName":"String",
                "email":"String",
                "phoneNumber":"String",
                "password":"String",
            }
        ]
    }
}
```

</td>
    </tr>
    <tr>
        <td>Response error</td>
        <td>

```json
{
    "error":{
        "code":400,
        "message":"Bad request"
    }
}
```

```json
{
    "error":{
        "code":500,
        "message":"Internal server error"
    }
}
```

</td>
    <tr>
        <td>Example</td>
        <td>
        curl --header "Content-Type: application/json" \<br>
        --request GET \<br>
        --data '{"code":200,"data":{"employee":[{"id":"822e4567e89k12d3a4564266554400000","positionCode":"1","firstName":"John","lastName":"Smith","email":"john@gmail.com","phoneNumber":"06201231234","password":"xyz123"}]}}' \<br>
        http://pizzaoldal.hu/staff/register
        </td>
    </tr>
    </tr>
<table>
    <tr>
        <th colspan="2">RegisterStaff</th>
    </tr>
    <tr>
        <td>Description</td>
        <td>Manager can register new staff member into the system.</td>
    </tr>
    <tr>
        <td>Request</td>
        <td>POST</td>
    </tr>
    <tr>
        <td>Path</td>
        <td>/staff/register</td>
    </tr>
    <tr>
        <td>
            Request body
        </td>
        <td>

```json
{
    "id":"UUID",
    "positionCode":"Int",
    "firstName":"String",
    "lastName":"String",
    "email":"String",
    "phoneNumber":"String",
    "password":"String",
}
```

</td>
    </tr>
    <tr>
        <td>Response OK</td>
        <td>

```json
{
    "code":200,
    "message":"Staff member added successfully"
}
```

</td>
    </tr>
    <tr>
        <td>Response error</td>
        <td>

```json
{
    "error":{
        "code":400,
        "message":"Bad request"
    }
}
```

```json
{
    "error":{
        "code":500,
        "message":"Internal server error"
    }
}
```

</td>
    <tr>
        <td>Example</td>
        <td>
        curl --header "Content-Type: application/json" \<br>
        --request POST \<br>
        --data '{"id":"822e4567e89k12d3a4564266554400000","positionCode":"2","firstName":"John","lastName":"Smith","email":"john.smith@example.com","phoneNumber":"06201231234","password":"xyz123"}' \<br>
        http://pizzaoldal.hu/staff/register
        </td>
    </tr>
    </tr>
</table>

<table>
    <tr>
        <th colspan="2">DeleteStaff</th>
    </tr>
    <tr>
        <td>Description</td>
        <td>Manager can delete staff member from the system.</td>
    </tr>
    <tr>
        <td>Request</td>
        <td>DELETE</td>
    </tr>
    <tr>
        <td>Path</td>
        <td>/staff/{staffId}</td>
    </tr>
    <tr>
        <td>Response OK</td>
        <td>

```json
{
    "code":200,
    "message":"Staff member deleted successfully"
}
```

</td>
    </tr>
    <tr>
        <td>Response error</td>
        <td>

```json
{
    "error":{
        "code":404,
        "message":"Staff member not found"
    }
}
```

```json
{
    "error":{
        "code":400,
        "message":"Bad request"
    }
}
```

```json
{
    "error":{
        "code":500,
        "message":"Internal server error"
    }
}
```

</td>
    </tr>
    <tr>
        <td>Example</td>
        <td>
        curl -X DELETE http://pizzaoldal.hu/staff/822e4567e89k12d3a4564266554400000
        </td>
    </tr>
</table>

<table>
    <tr>
        <th colspan="2">OrderPizza</th>
    </tr>
    <tr>
        <td>Description</td>
        <td>Customer can submit an order.</td>
    </tr>
    <tr>
        <td>Request</td>
        <td>POST</td>
    </tr>
    <tr>
        <td>Path</td>
        <td>/users/{user-id}/orders</td>
    </tr>
    <tr>
        <td>
            Request body
        </td>
        <td>

```json
{
    "order":{
        "user":{
            "firstName":"String",
            "lastName":"String",
            "postalCode":"String",
            "city":"String",
            "address":"String",
            "phoneNumber":"String",
            "comments":"String"
        },
        "pizzas":[
            "UUID"
        ]
    }
}
```

</td>
    </tr>
    <tr>
        <td>Response OK</td>
        <td>

```json
{
    "code":200,
    "message":"Order created successfully"
}
```

</td>
    </tr>
    <tr>
        <td>Response error</td>
        <td>

```json
{
    "error":{
        "code":400,
        "message":"Bad request"
    }
}
```

```json
{
    "error":{
        "code":500,
        "message":"Internal server error"
    }
}
```

</td>
    </tr>
    <tr>
        <td>Example</td>
        <td>
        curl --header "Content-Type: application/json" \<br>
        --request POST \<br>
        --data '{"order":{"user":{"firstName":"John",lastName"Smith","postalCode":"342gb3","city":"New York","address":"4. Wall street","phoneNumber":"06709583264","comments":"The bell does not work"},"pizzas":["822e4567e89k12d3a4564266554400000", "930e4567e89b12d3a4364266554400000"]}}' \<br>
        http://pizzaoldal.hu/users/123e4567e89b12d3a4564266554400000/orders
        </td>
    </tr>
</table>

<table>
    <tr>
        <th colspan="2">AddPizza</th>
    </tr>
    <tr>
        <td>Description</td>
        <td>Manager can record a pizza to the database.</td>
    </tr>
    <tr>
        <td>Request</td>
        <td>POST</td>
    </tr>
    <tr>
        <td>Path</td>
        <td>/pizzas/record</td>
    </tr>
    <tr>
        <td>
            Request body
        </td>
        <td>

```json
{
    "name":"String",
    "price":"Int",
    "picture":"String",
    "ingredients":[
        {
            "name":"String"
        }
    ]
}
```

</td>
    </tr>
    <tr>
        <td>Response OK</td>
        <td>

```json
{
    "code":200,
    "message":"Pizza added successfully"
}
```

</td>
    </tr>
    <tr>
        <td>Response error</td>
        <td>

```json
{
    "error":{
        "code":400,
        "message":"Bad request"
    }
}
```

```json
{
    "error":{
        "code":500,
        "message":"Internal server error"
    }
}
```

</td>
    <tr>
        <td>Example</td>
        <td>
        curl --header "Content-Type: application/json" \<br>
        --request POST \<br>
        --data '{"name":"margherita","price":1500,"picture":"pictures/sfasf342adsfs454","ingredients":[{"name":"sajt"},{"name":"sonka"}]}' \<br>
        http://pizzaoldal.hu/pizzas/record
        </td>
    </tr>
    </tr>
</table>

<table>
    <tr>
        <th colspan="2">PizzaSearch</th>
    </tr>
    <tr>
        <td>Description</td>
        <td>Customer can search pizzas.</td>
    </tr>
    <tr>
        <td>Request</td>
        <td>GET</td>
    </tr>
    <tr>
        <td>Path</td>
        <td>/pizzas</td>
    </tr>
    <tr>
        <td>Response OK</td>
        <td>

```json
{
    "code":200,
    "data":{
        "pizzas":[
            {
                "id":"UUID",
                "name":"String",
                "price":"Int",
                "picture":"String",
                "ingredients":[
                    {
                        "name":"String",
                    }
                ]
            }
        ]
    }
}
```

</td>
    </tr>
    <tr>
        <td>Response error</td>
        <td>

```json
{
    "error":{
        "code":400,
        "message":"Bad request"
    }
}
```

```json
{
    "error":{
        "code":500,
        "message":"Internal server error"
    }
}
```

</td>
    </tr>
    <tr>
        <td>Example</td>
        <td>
        curl --request GET http://pizzaoldal.hu/pizzas
        </td>
    </tr>
</table>

<table>
    <tr>
        <th colspan="2">GetOrderList</th>
    </tr>
    <tr>
        <td>Description</td>
        <td>Manager can get the list of all orders.</td>
    </tr>
    <tr>
        <td>Request</td>
        <td>GET</td>
    </tr>
    <tr>
        <td>Path</td>
        <td>/order-lists</td>
    </tr>
    <tr>
        <td>Response OK</td>
        <td>

```json
{
    "code":200,
    "data":{
        "orders":[
            {
                "user":{
                    "firstName":"String",
                    "lastName":"String",
                    "city":"String",
                    "address":"String",
                    "phoneNumber":"String",
                    "comments":"String"
                },
                "deliveryAt":"DateTime",
                "pizzas":[
                    {
                        "name":"String",
                        "preparedAt":"DateTime"
                    }
                ]
            }
        ]
    }
}
```

</td>
    </tr>
    <tr>
        <td>Response error</td>
        <td>

```json
{
    "error":{
        "code":400,
        "message":"Bad request"
    }
}
```

```json
{
    "error":{
        "code":500,
        "message":"Internal server error"
    }
}
```

</td>
    </tr>
    <tr>
        <td>Example</td>
        <td>
        curl --request GET http://pizzaoldal.hu/pizzas/order-lists
        </td>
    </tr>
</table>

<table>
    <tr>
        <th colspan="2">GetPreparationList</th>
    </tr>
    <tr>
        <td>Description</td>
        <td>Kitchen staff can get the scheduled order list.</td>
    </tr>
    <tr>
        <td>Request</td>
        <td>GET</td>
    </tr>
    <tr>
        <td>Path</td>
        <td>/pizzas/preparation-lists</td>
    </tr>
    <tr>
        <td>Response OK</td>
        <td>

```json
{
    "code":200,
    "data":{
            "pizzas":[
                {
                    "sequentialNumber":"Int",
                    "id":"UUID",
                    "name":"String",
                    "PreparedAt":"DateTime"
                }
            ]
        }
    }
}
```

</td>
    </tr>
    <tr>
        <td>Response error</td>
        <td>

```json
{
    "error":{
        "code":400,
        "message":"Bad request"
    }
}
```

```json
{
    "error":{
        "code":500,
        "message":"Internal server error"
    }
}
```

</td>
    </tr>
    <tr>
        <td>Example</td>
        <td>
        curl --request GET http://pizzaoldal.hu/pizzas/preparation-lists
        </td>
    </tr>
</table>

<table>
    <tr>
        <th colspan="2">UpdatePreparationList</th>
    </tr>
    <tr>
        <td>Description</td>
        <td>Kitchen staff can update the preparation list by completing orders.</td>
    </tr>
    <tr>
        <td>Request</td>
        <td>PATCH</td>
    </tr>
    <tr>
        <td>Path</td>
        <td>/order-lists/{order-list-id}</td>
    </tr>
    <tr>
        <td>Request body</td>
        <td>

```json
{
    "pizza":{
        "id":"UUID",
        "PreparedAt":"DateTime"
    }
}
```

</td>
    </tr>
    <tr>
        <td>Response OK</td>
        <td>

```json
{
    "code":200,
    "message":"Orderlist updated successfully"
}
```

</td>
    </tr>
    <tr>
        <td>Response error</td>
        <td>

```json
{
    "error":{
        "code":400,
        "message":"Bad request"
    }
}
```

```json
{
    "error":{
        "code":500,
        "message":"Internal server error"
    }
}
```

</td>
    </tr>
    <tr>
        <td>Example</td>
        <td>
        curl --header "Content-Type: application/json" \<br>
        --request PATCH \<br>
        --data '{"pizza":{"id":"123e4567e89b12d3a4564266554400000","preparedAt":"2020/02/12 11:20"}' \<br>
        http://pizzaoldal.hu/preparation-lists
        </td>
    </tr>
</table>

<table>
    <tr>
        <th colspan="2">GetDeliveryList</th>
    </tr>
    <tr>
        <td>Description</td>
        <td>Delivery staff can get scheduled delivery list.</td>
    </tr>
    <tr>
        <td>Request</td>
        <td>GET</td>
    </tr>
    <tr>
        <td>Path</td>
        <td>/delivery-list</td>
    </tr>
    <tr>
        <td>Response OK</td>
        <td>

```json
{
    "code":200,
    "data":{
        "deliveries":[
            {
                "id":"UUID",
                "name":"String",
                "deliveredAt":"DateTime",
                "user":{
                    "firstName":"String",
                    "lastName":"String",
                    "postalCode":"String",
                    "city":"String",
                    "address":"String",
                    "phoneNumber":"String",
                    "comments":"String"
                }
            }
        ]
    }
}
```

</td>
    </tr>
    <tr>
        <td>Response error</td>
        <td>

```json
{
    "error":{
        "code":400,
        "message":"Bad request"
    }
}
```

```json
{
    "error":{
        "code":500,
        "message":"Internal server error"
    }
}
```

</td>
    </tr>
    <tr>
        <td>Example</td>
        <td>
        curl --request GET http://pizzaoldal.hu/delivery-list
        </td>
    </tr>
</table>

<table>
    <tr>
        <th colspan="2">UpdateDeliveryList</th>
    </tr>
    <tr>
        <td>Description</td>
        <td>Delivery staff can update the delivery list by completing deliveries.</td>
    </tr>
    <tr>
        <td>Request</td>
        <td>PATCH</td>
    </tr>
    <tr>
        <td>Path</td>
        <td>/delivery-lists</td>
    </tr>
    <tr>
        <td>Request body</td>
        <td>

```json
{
    "pizza":{
        "id":"UUID",
        "deliveredAt":"DateTime"
    }
}
```

</td>
    </tr>
    <tr>
        <td>Response OK</td>
        <td>

```json
{
    "code":200,
    "message":"Delivery list updated successfully"
}
```

</td>
    </tr>
    <tr>
        <td>Response error</td>
        <td>

```json
{
    "error":{
        "code":400,
        "message":"Bad request"
    }
}
```

```json
{
    "error":{
        "code":500,
        "message":"Internal server error"
    }
}
```

</td>
    </tr>
    <tr>
        <td>Example</td>
        <td>
        curl --header "Content-Type: application/json" \<br>
        --request PATCH \<br>
        --data '{"pizza":{"id":"123e4567e89b12d3a4564266554400000","deliveredAt":"2020/02/10 12:22"}' \<br>
        http://pizzaoldal.hu/delivery-lists
        </td>
    </tr>
</table>

<table>
    <tr>
        <th colspan="2">GetSchedulers</th>
    </tr>
    <tr>
        <td>Description</td>
        <td>Manager can list the available scheduler algorithms.</td>
    </tr>
    <tr>
        <td>Request</td>
        <td>GET</td>
    </tr>
    <tr>
        <td>Path</td>
        <td>/algorithms</td>
    </tr>
    <tr>
        <td>Response OK</td>
        <td>

```json
{
    "code":200,
    "data":{
        "preparationAlgorithms":[
            {
                "algorithmId":"UUID",
                "name":"String",
                "description":"String"
            }
        ],
        "deliveryAlgorithms":[
            {
                "algorithmId":"UUID",
                "name":"String",
                "description":"String"
            }
        ],
        "chosen":{
            "preparationAlgorithmId":"UUID",
            "deliveryAlgorithmId":"UUID"
        }
    }
}
```

</td>
    </tr>
    <tr>
        <td>Response error</td>
        <td>

```json
{
    "error":{
        "code":400,
        "message":"Bad request"
    }
}
```

```json
{
    "error":{
        "code":500,
        "message":"Internal server error"
    }
}
```

</td>
    </tr>
    <tr>
        <td>Example</td>
        <td>
        curl --request GET http://pizzaoldal.hu/algorithms
        </td>
    </tr>
</table>

<table>
    <tr>
        <th colspan="2">SetScheduler</th>
    </tr>
    <tr>
        <td>Description</td>
        <td>Manager can set the scheduler algorithm.</td>
    </tr>
    <tr>
        <td>Request</td>
        <td>PATCH</td>
    </tr>
    <tr>
        <td>Path</td>
        <td>/algorithms</td>
    </tr>
    <tr>
        <td>Request body</td>
        <td>

```json
{
    "chosen":{
        "preparationAlgorithmId":"UUID",
        "deliveryAlgorithmId":"UUID"
    }
}
```

</td>
    </tr>
    <tr>
        <td>Response error</td>
        <td>

```json
{
    "error":{
        "code":400,
        "message":"Bad request"
    }
}
```

```json
{
    "error":{
        "code":500,
        "message":"Internal server error"
    }
}
```

</td>
    </tr>
    <tr>
        <td>Example</td>
        <td>
        curl --header "Content-Type: application/json" \<br>
        --request PATCH \<br>
        --data '{"chosen":{"preparationAlgorithmId":"930e4567e89b12d3a4364266554400000","deliveryAlgorithmId":"822e4567e89k12d3a4564266554400000"}}' \<br>
        http://pizzaoldal.hu/algorithms
        </td>
    </tr>
</table>
