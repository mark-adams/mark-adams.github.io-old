---
layout: post
title: Another new day!
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis efficitur semper magna ut facilisis. Mauris nec gravida lacus, vel dictum magna. Fusce tincidunt, odio eget commodo pellentesque, diam justo mollis urna, ut scelerisque mi ligula facilisis ex. Vivamus fermentum, magna nec pellentesque luctus, nisl odio convallis purus, at semper orci lacus ac velit. Mauris mollis, nibh vitae tempor malesuada, sem dolor faucibus felis, vel commodo erat diam vel diam. Aenean facilisis risus sem, eu laoreet quam feugiat sit amet. Pellentesque diam nunc, consectetur elementum pulvinar id, cursus id elit. Vestibulum in massa quis libero varius dictum quis nec leo.

{% highlight python %}
class TestJWT:
    def test_decodes_valid_jwt(self, jwt):
        example_payload = {'hello': 'world'}
        example_secret = 'secret'
        example_jwt = (
            b'eyJhbGciOiAiSFMyNTYiLCAidHlwIjogIkpXVCJ9'
            b'.eyJoZWxsbyI6ICJ3b3JsZCJ9'
            b'.tvagLDLoaiJKxOKqpBXSEGy7SYSifZhjntgm9ctpyj8')
        decoded_payload = jwt.decode(example_jwt, example_secret)

        assert decoded_payload == example_payload

    def test_load_verify_valid_jwt(self, jwt):
        example_payload = {'hello': 'world'}
        example_secret = 'secret'
        example_jwt = (
            b'eyJhbGciOiAiSFMyNTYiLCAidHlwIjogIkpXVCJ9'
            b'.eyJoZWxsbyI6ICJ3b3JsZCJ9'
            b'.tvagLDLoaiJKxOKqpBXSEGy7SYSifZhjntgm9ctpyj8')

        decoded_payload = jwt.decode(example_jwt, key=example_secret)

        assert decoded_payload == example_payload
{% endhighlight %}

Nunc mattis tempus velit id porttitor. Quisque ac velit id ipsum iaculis venenatis a sit amet mauris. Vestibulum ut neque sed ex placerat aliquam. Maecenas fringilla mi vitae nunc cursus accumsan. In accumsan magna et elit ultricies vehicula. Cras eu risus eget ex viverra tristique. Aliquam sit amet nibh vitae odio placerat efficitur. Duis neque ex, rutrum in nisl vel, consectetur elementum dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras ante ipsum, feugiat porttitor dolor sed, scelerisque consequat nibh. Proin commodo tortor vel risus tempus consectetur. Aenean id porttitor dui.

In hac habitasse platea dictumst. Suspendisse aliquam, metus at rhoncus maximus, nunc nisl tristique nunc, quis consectetur nulla lacus ac lacus. Mauris urna lorem, blandit eu nibh vitae, efficitur fringilla sem. In fringilla, leo consequat pharetra maximus, magna nibh volutpat dui, sed luctus lacus elit et libero. Cras dignissim odio fringilla ornare euismod. Mauris faucibus venenatis augue. Cras nec diam in quam aliquet ullamcorper vel aliquet est. Donec fringilla sem dolor, eu volutpat magna suscipit rutrum. Suspendisse pulvinar ullamcorper urna.

Vivamus laoreet a nunc ac rhoncus. Ut tincidunt purus imperdiet eros aliquet placerat. Duis turpis libero, volutpat nec mauris sed, venenatis condimentum metus. Pellentesque sollicitudin egestas arcu sed vestibulum. Nam consequat, metus a volutpat finibus, lacus est vestibulum quam, et tempor odio diam vel felis. Curabitur ultricies lacinia sem in gravida. Sed magna velit, auctor vitae nunc sit amet, aliquam rutrum mauris. Proin hendrerit nunc a sodales venenatis. Fusce pellentesque, lacus id fringilla efficitur, turpis ante tincidunt urna, id gravida nisl sapien non nulla. Proin sit amet nisl hendrerit, consectetur nulla in, elementum libero. Mauris eget velit maximus, finibus quam non, imperdiet sem. Etiam interdum, felis in commodo tempus, felis ante tempor est, sit amet rutrum nunc dolor aliquam nunc.

Aliquam nec dapibus nisl. Duis leo metus, ullamcorper eu facilisis nec, tempor rutrum purus. Aliquam erat massa, bibendum venenatis tristique a, vehicula quis enim. Vivamus convallis sollicitudin lorem, vitae efficitur mi pellentesque ut. Sed in tellus interdum, dapibus diam id, aliquam elit. Praesent commodo tincidunt ultricies. Maecenas fringilla massa a eros dapibus elementum.
