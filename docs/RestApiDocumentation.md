<table>
    <tr>
        <th colspan="2">StaffLogin</th>
    </tr>
    <tr>
        <td>Description</td>
        <td>Staff can login to the system.</td>
    </tr>
    <tr>
        <td>Request</td>
        <td>POST</td>
    </tr>
    <tr>
        <td>Path</td>
        <td>/login</td>
    </tr>
    <tr>
        <td>
            Request body
        </td>
        <td>

```json
{
    "staffmember":{
        "username":"String",
        "password":"String",
    }
}
```
</td>
    </tr>
    <tr>
        <td>Response OK</td>
        <td>200</td>
    </tr>
    <tr>
        <td>Response error</td>
        <td>401, 500</td>
    </tr>
    <tr>
        <td>Example</td>
        <td>
        curl --header "Content-Type: application/json" \<br>
        --request POST \<br>
        --data '{"username":"MasterCook","password":"xyz123"}' \<br>
        http://pizzaoldal.hu/login
        </td>
    </tr>
</table>
<table>
    <tr>
        <th colspan="2">CreateUser</th>
    </tr>
    <tr>
        <td>Description</td>
        <td>Customer can start an order process. The customer have to provide their delivery information.</td>
    </tr>
    <tr>
        <td>Request</td>
        <td>POST</td>
    </tr>
    <tr>
        <td>Path</td>
        <td>/users</td>
    </tr>
    <tr>
        <td>
            Request body
        </td>
        <td>

```json
{
    "user":{
        "name":"String",
        "city":"String",
        "address":"String",
        "phoneNumber":"String",
        "comments":"String"
    }
}
```
</td>
    </tr>
    <tr>
        <td>Response OK</td>
        <td>200</td>
    </tr>
    <tr>
        <td>Response error</td>
        <td>400, 500</td>
    </tr>
    <tr>
        <td>Example</td>
        <td>
        curl --header "Content-Type: application/json" \<br>
        --request POST \<br>
        --data '{"user":{"name":"István Kovács","city":"Eger","address":"4. Leányka street","phoneNumber":"06709583264","comments":"The bell does not work"}}' \<br>
        http://pizzaoldal.hu/users
        </td>
    </tr>
</table>
<table>
    <tr>
        <th colspan="2">OrderPizza</th>
    </tr>
    <tr>
        <td>Description</td>
        <td>Customer can submit an order</td>
    </tr>
    <tr>
        <td>Request</td>
        <td>POST</td>
    </tr>
    <tr>
        <td>Path</td>
        <td>/users/{userId}/orders</td>
    </tr>
    <tr>
        <td>
            Request body
        </td>
        <td>

```json
{
    "order":{
        "userId":"UUID",
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
        <td>200</td>
    </tr>
    <tr>
        <td>Response error</td>
        <td>400, 500</td>
    </tr>
    <tr>
        <td>Example</td>
        <td>
        curl --header "Content-Type: application/json" \<br>
        --request POST \<br>
        --data '{"order":{"userId":"123e4567e89b12d3a4564266554400000","pizzas":["822e4567e89k12d3a4564266554400000", "930e4567e89b12d3a4364266554400000"]}}' \<br>
        http://pizzaoldal.hu/users/123e4567e89b12d3a4564266554400000/orders
        </td>
    </tr>
</table>

<table>
    <tr>
        <th colspan="2">PizzaSearch</th>
    </tr>
    <tr>
        <td>Description</td>
        <td>Customer can search pizza by name</td>
    </tr>
    <tr>
        <td>Request</td>
        <td>GET</td>
    </tr>
    <tr>
        <td>Path</td>
        <td>/pizzas/{pizzaName}</td>
    </tr>
    <tr>
        <td>Response OK</td>
        <td>
        200

```json
{
   "pizza":{
      "pizzaId":"UUID",
      "pizzaName":"String",
      "pizzaPrice":"Int",
      "ingredients":[
         {
            "name":"String",
            "amount":"Int"
         }
      ],
      "allergens":[
         {
            "code":"Int",
            "name":"String"
         }
      ]
   }
}
```
</td>
    </tr>
    <tr>
        <td>Response error</td>
        <td>404, 500</td>
    </tr>
    <tr>
        <td>Example</td>
        <td>
        curl --request GET http://pizzaoldal.hu/pizzas/margherita
        </td>
    </tr>

<table>
    <tr>
        <th colspan="2">IngredientSearch</th>
    </tr>
    <tr>
        <td>Description</td>
        <td>Customer can search pizza ingredients.</td>
    </tr>
    <tr>
        <td>Request</td>
        <td>GET</td>
    </tr>
    <tr>
        <td>Path</td>
        <td>/ingredient/{ingredientName}</td>
    </tr>
    <tr>
        <td>Response OK</td>
        <td>
        200

```json
{
    "pizzas":[
        {
            "pizzaId":"UUID",
            "pizzaName":"String",
            "pizzaPrice":"Int",
            "ingredients":[
                {
                    "name":"String",
                    "amount":"Int"
                }
            ],
            "allergens":[
                {
                    "code":"Int",
                    "name":"String"
                }
            ]
        }
    ]
}
```
</td>
    </tr>
    <tr>
        <td>Response error</td>
        <td>404, 500</td>
    </tr>
    <tr>
        <td>Example</td>
        <td>
        curl --request GET http://pizzaoldal.hu/pizzas/salmon
        </td>
    </tr>
</table>

<table>
    <tr>
        <th colspan="2">GetOrderList</th>
    </tr>
    <tr>
        <td>Description</td>
        <td>Kitchen staff can get the sheduced order list</td>
    </tr>
    <tr>
        <td>Request</td>
        <td>GET</td>
    </tr>
    <tr>
        <td>Path</td>
        <td>/orderlists</td>
    </tr>
    <tr>
        <td>Response OK</td>
        <td>
        200

```json
{
    "lists":[
        "listId":"UUID",
        "pizzas":[
            {
                "sequentialNumber":"Int",
                "pizzaName":"String",
                "isDone":"Boolean"
            }
        ]
    ]
}
```
</td>
    </tr>
    <tr>
        <td>Response error</td>
        <td>400, 500</td>
    </tr>
    <tr>
        <td>Example</td>
        <td>
        curl --request GET http://pizzaoldal.hu/pizzas/orderlists
        </td>
    </tr>
</table>

<table>
    <tr>
        <th colspan="2">UpdateOrderList</th>
    </tr>
    <tr>
        <td>Description</td>
        <td>Kitchen staff can update the order list by completing orders.</td>
    </tr>
    <tr>
        <td>Request</td>
        <td>PUT</td>
    </tr>
    <tr>
        <td>Path</td>
        <td>/orderlists/{order-listid}</td>
    </tr>
    <tr>
        <td>Request body</td>
        <td>

```json
{
    "list":{
        "listId":"UUID",
        "pizzas":[
            {
                "sequentialNumber":"Int",
                "pizzaName":"String",
                "isDone":"Boolean"
            }
        ]
    }
}
```
</td>
    </tr>
    <tr>
        <td>Response OK</td>
        <td>200</td>
    </tr>
    <tr>
        <td>Response error</td>
        <td>400, 500</td>
    </tr>
    <tr>
        <td>Example</td>
        <td>
        curl --header "Content-Type: application/json" \<br>
        --request PUT \<br>
        --data '{"list":{"listId":"822e4567e89k12d3a4564266554400000","pizzas":[{"sequentialNumber":11,"pizzaName":"Castellomore","isDone":true},{"sequentialNumber":12,"pizzaName":"Margherita","isDone":false}]}}' \<br>
        http://pizzaoldal.hu/orderlists/822e4567e89k12d3a4564266554400000
        </td>
    </tr>
</table>

<table>
    <tr>
        <th colspan="2">GetDeliveryList</th>
    </tr>
    <tr>
        <td>Description</td>
        <td>Delivery staff can get scheduled delivery list</td>
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
        200

```json
{
    "Deliveries":[
        {
            "pizzaName":"String",
            "user":{
                "name":"String",
                "city":"String",
                "address":"String",
                "phoneNumber":"String",
                "comments":"String"
            }
        }
    ]
}
```
</td>
    </tr>
    <tr>
        <td>Response error</td>
        <td>400, 500</td>
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
        <th colspan="2">GetSchedulers</th>
    </tr>
    <tr>
        <td>Description</td>
        <td>Manager can list the available scheduler algorithms</td>
    </tr>
    <tr>
        <td>Request</td>
        <td>GET</td>
    </tr>
    <tr>
        <td>Path</td>
        <td>/manager</td>
    </tr>
    <tr>
        <td>Response OK</td>
        <td>
        200

```json
{
    "Algorithms":[
        {
            "AlgorithmId":"UUID",
            "Name":"String",
            "Description":"String"
        }
    ],
    "Chosen":{
        "AlgorithmId":"UUID"
    }
}
```
</td>
    </tr>
    <tr>
        <td>Response error</td>
        <td>400, 500</td>
    </tr>
    <tr>
        <td>Example</td>
        <td>
        curl --request GET http://pizzaoldal.hu/manager
        </td>
    </tr>
</table>

<table>
    <tr>
        <th colspan="2">SetScheduler</th>
    </tr>
    <tr>
        <td>Description</td>
        <td>Manager can set the scheduler algorithm</td>
    </tr>
    <tr>
        <td>Request</td>
        <td>PUT</td>
    </tr>
    <tr>
        <td>Path</td>
        <td>/manager</td>
    </tr>
    <tr>
        <td>Response OK</td>
        <td>
        200

```json
{
    "Algorithms":[
        {
            "AlgorithmId":"UUID",
            "Name":"String",
            "Description":"String"
        }
    ],
    "Chosen":{
        "AlgorithmId":"UUID"
    }
}
```
</td>
    </tr>
    <tr>
        <td>Response error</td>
        <td>400, 500</td>
    </tr>
    <tr>
        <td>Example</td>
        <td>
        curl --header "Content-Type: application/json" \<br>
        --request PUT \<br>
        --data '{"list":{"listId":"822e4567e89k12d3a4564266554400000","pizzas":[{"sequentialNumber":11,"pizzaName":"Castellomore","isDone":true},{"sequentialNumber":12,"pizzaName":"Margherita","isDone":false}]}}' \<br>
        http://pizzaoldal.hu/manager
        </td>
    </tr>
</table>