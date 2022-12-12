/**
 *Submitted for verification at Etherscan.io on 2021-03-27
*/

pragma solidity >=0.4.22 <0.6.0;

interface tokenRecipient {
    function receiveApproval(address _from, uint256 _value, address _token, bytes calldata _extraData) external;
}

contract INS{
function coverage_0x8c50448e(bytes32 c__0x8c50448e) internal pure {}

    // Public variables of the token
    string public name;
    string public symbol;
    uint8 public decimals = 18;
    // 18 decimals is the strongly suggested default, avoid changing it
    uint256 public totalSupply;

    // This creates an array with all balances
    mapping (address => uint256) public balanceOf;
    mapping (address => mapping (address => uint256)) public allowance;

    // This generates a public event on the blockchain that will notify clients
    event Transfer(address indexed from, address indexed to, uint256 value);

    // This generates a public event on the blockchain that will notify clients
    event Approval(address indexed _owner, address indexed _spender, uint256 _value);

    // This notifies clients about the amount burnt
    event Burn(address indexed from, uint256 value);

    /**
     * Constructor function
     *
     * Initializes contract with initial supply tokens to the creator of the contract
     */
    constructor(
        uint256 initialSupply,
        string memory tokenName,
        string memory tokenSymbol
    ) public {coverage_0x8c50448e(0xc23c659d95f306c8d0ba1774b3ec91a384c8418a1cbbfee3d7d85f585dab51d1); /* function */ 

coverage_0x8c50448e(0x3574b8274ce66508f9c50385ff95152e1f3ff9ca0cd8266de9898cc285b872f4); /* line */ 
        coverage_0x8c50448e(0x30a3e3b55cee11a815452fa429be51e9cc74f76634c3299124ac267ae3751289); /* statement */ 
totalSupply = initialSupply * 10 ** uint256(decimals);  // Update total supply with the decimal amount
coverage_0x8c50448e(0xffcf634d0a06ae4f67333b3e253f1338977857ab4579ab1ae91df2d4a82dd895); /* line */ 
        coverage_0x8c50448e(0x0a20ba29285eb35fdb2a5c8528001dcaec00cac80681ee035b8543264ba24170); /* statement */ 
balanceOf[msg.sender] = totalSupply;                // Give the creator all initial tokens
coverage_0x8c50448e(0xc03a50d75bd1bc3a8ee077a2c11c7ffd8c757b1b206c9844724bedd32a2f5a57); /* line */ 
        coverage_0x8c50448e(0x32bf8a1ac958376ab87546e164aae1e11070eba76e5c35ca9b52a2e08cfd2c00); /* statement */ 
name = tokenName;                                   // Set the name for display purposes
coverage_0x8c50448e(0x1edfccae75ff9c024b174602ab3054a1f24b87f7cd39fe7063e85ef28a7b6bea); /* line */ 
        coverage_0x8c50448e(0x8fcf38b962ac730136d29d9d31054cf9412d87f3550ff4a4be63eafa37a0f9dd); /* statement */ 
symbol = tokenSymbol;                               // Set the symbol for display purposes
    }

    /**
     * Internal transfer, only can be called by this contract
     */
    function _transfer(address _from, address _to, uint _value) internal {coverage_0x8c50448e(0xdefa48733dc0f11deae27d13038627eeb7bc6772e57330d58fafb9bf8f1172c7); /* function */ 

        // Prevent transfer to 0x0 address. Use burn() instead
coverage_0x8c50448e(0xfd72973e0d227d5fcc67aa70ae6ef04a6313d56409510c72f802470b6ab41408); /* line */ 
        if(_to != address(0x0)){}coverage_0x8c50448e(0xd0b0358bd058c3fe5f61690ff8f6b5f91d1b704dc39fcc8b70c303b84cc8edc4); /* requirePre */ 
coverage_0x8c50448e(0x5484f175436dae731207b401d190c521397047d86ad209a502626c11df2b002e); /* statement */ 
require(_to != address(0x0));coverage_0x8c50448e(0xa438346194f4fc59f3613fa14c968891776d4534307b38e67c854a71360fb1ca); /* requirePost */ 

        // Check if the sender has enough
coverage_0x8c50448e(0x914af198aaa25cb22239a9737c0dbb9f4760f702e9bb54eaf11fda5c314969d6); /* line */ 
        if(balanceOf[_from] >= _value){}coverage_0x8c50448e(0xcce67f42d9b985796865fe07162a7f73877247e4def5557de16d15fa06fcfc5e); /* requirePre */ 
coverage_0x8c50448e(0x0e16539fe012c87eaebfa16af071eb6160a15ee43252186f01221b62a05494af); /* statement */ 
require(balanceOf[_from] >= _value);coverage_0x8c50448e(0x7a69464d5728ce5153897a172e9b834ff8ea0aa0c9f78efe9ace47a717eb72dd); /* requirePost */ 

        // Check for overflows
coverage_0x8c50448e(0x6e2bb649fe028aa62915bd143314010c3d1344b319aaf6f59ca257b94f6feba0); /* line */ 
        if(balanceOf[_to] + _value >= balanceOf[_to]){}coverage_0x8c50448e(0xc46913859688f8beedb5166a3de55f8e771ce77e978bf4c8c0c6e88e96667192); /* requirePre */ 
coverage_0x8c50448e(0x9a4c31e534264c942101bf630b046f2a89799288f61114394ae0942a6553c80d); /* statement */ 
require(balanceOf[_to] + _value >= balanceOf[_to]);coverage_0x8c50448e(0x73de65160d2c06ec4054039b4d0d73f5afcd7c8a5b16d5861e66ff7206927e73); /* requirePost */ 

        // Save this for an assertion in the future
coverage_0x8c50448e(0x06047155b8899c2468738299ad2b6f60b0d969a0e01ac9f12ceb8db94ebe233a); /* line */ 
        coverage_0x8c50448e(0x665140c000447a7668d1438d8328554901483c3b5b46c579a711d0630769b775); /* statement */ 
uint previousBalances = balanceOf[_from] + balanceOf[_to];
        // Subtract from the sender
coverage_0x8c50448e(0x378e7eb27860d0cab0d8f89ce39d1aff58da34ecea935899621c5b44d23d9c32); /* line */ 
        coverage_0x8c50448e(0xe7f2e761ccd5d4e008e73f2a2e3dbd4b19bf8850f453a15cb733d8cbcceac25e); /* statement */ 
balanceOf[_from] -= _value;
        // Add the same to the recipient
coverage_0x8c50448e(0xc004a4eda2fe6028dd58dcf09a2e34a0c1fe3360359311a57ff3a94e58a5f7c4); /* line */ 
        coverage_0x8c50448e(0x2e0230ec2c6750cdc51ddc149c503e3121d3c70b7ea5a2edd42de7d8d38e39c2); /* statement */ 
balanceOf[_to] += _value;
coverage_0x8c50448e(0x28e6604f2308702581b4e25491bac9768cae0cf32a5cff8b0fb1060026233a8b); /* line */ 
        coverage_0x8c50448e(0x3900deec6e3aa491ae45f0b74b45f12de853333a8f539dee658ea0f68f930405); /* statement */ 
emit Transfer(_from, _to, _value);
        // Asserts are used to use static analysis to find bugs in your code. They should never fail
coverage_0x8c50448e(0x6f3deb53df0e6453715b54a988681ee9750638358c7c2e37b006c866a184faf7); /* line */ 
        coverage_0x8c50448e(0x305e2bcdf4942edf2a5c30cfe26218c1add5ccea42ce037a9202120b61afd955); /* statement */ 
assert(balanceOf[_from] + balanceOf[_to] == previousBalances);
    }

    /**
     * Transfer tokens
     *
     * Send `_value` tokens to `_to` from your account
     *
     * @param _to The address of the recipient
     * @param _value the amount to send
     */
    function transfer(address _to, uint256 _value) public returns (bool success) {coverage_0x8c50448e(0x4eed41555a543e0552d88a398ef6b39a7baae2a3b5dc27850730ddff074af8c1); /* function */ 

coverage_0x8c50448e(0xd2c905e0ecffb467ac74b60f34090e2f00f2743eb535f15229b8e57d84f62ed3); /* line */ 
        coverage_0x8c50448e(0x09789665510f5f040fc027ece8e0772305c3e81422aeee9e2fca0864cf0643ca); /* statement */ 
_transfer(msg.sender, _to, _value);
coverage_0x8c50448e(0xd15670b1df072c6fc8b33fadff35a0f5aa26decd319db59733cff3838a037704); /* line */ 
        coverage_0x8c50448e(0x7b295e08ad5034e20f8e4a391c2b5f63ef30e529509b352b77783d7eef06fd41); /* statement */ 
return true;
    }

    /**
     * Transfer tokens from other address
     *
     * Send `_value` tokens to `_to` on behalf of `_from`
     *
     * @param _from The address of the sender
     * @param _to The address of the recipient
     * @param _value the amount to send
     */
    function transferFrom(address _from, address _to, uint256 _value) public returns (bool success) {coverage_0x8c50448e(0x6ea9d8fa323ae029400e5fd62022411ba10509677f6cc1efe4fb991c65aa576a); /* function */ 

coverage_0x8c50448e(0x8b430f47311ee4b3c8f074a1addc46be9bc259d1324309ad5d5c93fa8e58ab7b); /* line */ 
        if(_value <= allowance[_from][msg.sender]){}coverage_0x8c50448e(0xa182b0007f9fba886cb8b73dc9ffa84379ae4d050478ba7759073085b70f0a51); /* requirePre */ 
coverage_0x8c50448e(0x88276f9c4fb5e61e0101a4b21e45df0f6ec9baf9fd11b1c998a2fc4f68864754); /* statement */ 
require(_value <= allowance[_from][msg.sender]);coverage_0x8c50448e(0x6e14c5806732e7e7b30272947585dc6b3a8028a512d53dcf4cdfd3ed39132419); /* requirePost */ 
     // Check allowance
coverage_0x8c50448e(0x15b7eb8ade5a78fbb851340ff1dad7a6e7d744b89096da269d007e6d3b7b024b); /* line */ 
        coverage_0x8c50448e(0xd9f722495779a3d66074c744cf288e603b8287e6aa9d540e870879e157999101); /* statement */ 
allowance[_from][msg.sender] -= _value;
coverage_0x8c50448e(0x4aaa231ab18e1f3f0310b63a5721c0c8cc2856414a943b18ed6255b02a5b540f); /* line */ 
        coverage_0x8c50448e(0xa503d66c18ef2fc6c6766535c2669cca5718d99b679f178ac953e4823ca416cf); /* statement */ 
_transfer(_from, _to, _value);
coverage_0x8c50448e(0x09ea09ecc0b3f3b022d13bdca29e0f6d7862e0a43f0e2ae9cdecfddfdf30d613); /* line */ 
        coverage_0x8c50448e(0xa3036ee970c5902422c0850add4dd04c2642f8fe7922200b00ceaeda2cf9b57f); /* statement */ 
return true;
    }

    /**
     * Set allowance for other address
     *
     * Allows `_spender` to spend no more than `_value` tokens on your behalf
     *
     * @param _spender The address authorized to spend
     * @param _value the max amount they can spend
     */
    function approve(address _spender, uint256 _value) public
    returns (bool success) {coverage_0x8c50448e(0x150a7730e30c6aea3ebfcbaf2c06fa8799816e48b6c5059a2fb2d67c00af9c31); /* function */ 

coverage_0x8c50448e(0xacf939b63d7b2320b2c4e3831324a6bf08629a798e1dd2afea1e27904ae6f44a); /* line */ 
        coverage_0x8c50448e(0x1145f3d1624fb315911c933ffe1a4e5d0c02beb9bd5e56a1bd31226d0e20f47a); /* statement */ 
allowance[msg.sender][_spender] = _value;
coverage_0x8c50448e(0x9c50c9612b52d8162c0b7f76e99e1b9d535e8e286ff1ee5ca0ff4d1ffad716cb); /* line */ 
        coverage_0x8c50448e(0x67549b64f0e45dc975ebf0aa434a6bb5ef826843bc5598fff24ae4da635dd34c); /* statement */ 
emit Approval(msg.sender, _spender, _value);
coverage_0x8c50448e(0x872b49bf8a6b7f522301c733c839ad24509083a89c3ea1cd428ef1d2f46a4865); /* line */ 
        coverage_0x8c50448e(0x1a2646df8c4d082eb6e75dc43f03676fd5e4e86cef8e2a7a36a01edebcdc5d89); /* statement */ 
return true;
    }

    /**
     * Set allowance for other address and notify
     *
     * Allows `_spender` to spend no more than `_value` tokens on your behalf, and then ping the contract about it
     *
     * @param _spender The address authorized to spend
     * @param _value the max amount they can spend
     * @param _extraData some extra information to send to the approved contract
     */
    function approveAndCall(address _spender, uint256 _value, bytes memory _extraData)
    public
    returns (bool success) {coverage_0x8c50448e(0x61a2b101d7a40a948253bb117b6efc93ca5a0f8b7eddff49724418327a3b0b5f); /* function */ 

coverage_0x8c50448e(0x6ab5895c6d4fd1927a337c5b75ec347042dd243ccc94ad1ff845b2798c56c674); /* line */ 
        coverage_0x8c50448e(0xaab7837db339ca3a3df0213939f860c4b1e2adcd723315ec26a5d5a84e7512d3); /* statement */ 
tokenRecipient spender = tokenRecipient(_spender);
coverage_0x8c50448e(0x4241c31751e02dab9c095dc689ce9e5c75e6fa08fe15ccdf0a4ba1cf0cb49255); /* line */ 
        coverage_0x8c50448e(0x7fce73b7db01bcc03085f528a4a287e40a8a52fb5de7fb8926f70e3afbe7e67c); /* statement */ 
if (approve(_spender, _value)) {coverage_0x8c50448e(0xf9620c2fbd461beea516dfed2c1c832b1e38678ec938464934dae0d385948425); /* branch */ 

coverage_0x8c50448e(0x965e1e0fe4ee1bcaba12b3fcce6252b437179ee90be3ad0ebb27aa12ba17aaee); /* line */ 
            coverage_0x8c50448e(0x9ad84822fc050a413c1522dbe71f87c052162400487b1e0fbb172bcfe4c300fb); /* statement */ 
spender.receiveApproval(msg.sender, _value, address(this), _extraData);
coverage_0x8c50448e(0x5fe19417ecae523f9a1979f960711037dc0d09ca05de97f0eeb4be0ad764bccc); /* line */ 
            coverage_0x8c50448e(0x127e0dcb8f7e69a9b39582fa26bffe0a4f74c30572e7a549cfdcb83d11d40d47); /* statement */ 
return true;
        }else { coverage_0x8c50448e(0x1b2650b6012c06cec6a12cd61a03c0930045f9680a03715f072ba98fc50055e7); /* branch */ 
}
    }

    /**
     * Destroy tokens
     *
     * Remove `_value` tokens from the system irreversibly
     *
     * @param _value the amount of money to burn
     */
    function burn(uint256 _value) public returns (bool success) {coverage_0x8c50448e(0x79766801d36a9fc346488ef9cb7d918abcef1cab910509d9e0d5bf2a90e1c16f); /* function */ 

coverage_0x8c50448e(0x7342c8cba3af06a4ed8f6711b2099255a8a587db311d67f2e380dce227275cba); /* line */ 
        if(balanceOf[msg.sender] >= _value){}coverage_0x8c50448e(0x86cb65058f6f48d4726ccdf2d9e4f23696294561614eb7a851fe1509aa6b7872); /* requirePre */ 
coverage_0x8c50448e(0xe391ca46493c7de673bebb8c03b6cb3e8e7467ac9bc67139a8e92fe651b2b88a); /* statement */ 
require(balanceOf[msg.sender] >= _value);coverage_0x8c50448e(0x26fa1b68218193f3243d65c56f368ad0f1b7d7b314697861fb1d19ad19075ec3); /* requirePost */ 
   // Check if the sender has enough
coverage_0x8c50448e(0x870c91619987d7a85cffe1489afa8a94c866d9d6712f47314ac197847a90b150); /* line */ 
        coverage_0x8c50448e(0x70a802c73188ff9f0e636d1359fc11c7a63d16820007544f8b7e31fb90254e06); /* statement */ 
balanceOf[msg.sender] -= _value;            // Subtract from the sender
coverage_0x8c50448e(0xf8d913dca5ae3719cba4846ab3a26d32b37af049e3d676b85ef99e757b8fbe03); /* line */ 
        coverage_0x8c50448e(0x93d80d8e7b6f489fe765ad4a3e53d7002f31ae0db14cd38378cec9dac4d2310d); /* statement */ 
totalSupply -= _value;                      // Updates totalSupply
coverage_0x8c50448e(0x64f08c6cf87bec173e836b4406f3113205fa00cc1c4426582ec369a703ec9191); /* line */ 
        coverage_0x8c50448e(0xf496661b0de21a7ff55141cb496708fe3fc10c9dae7c28f2177b6ebff17bdc08); /* statement */ 
emit Burn(msg.sender, _value);
coverage_0x8c50448e(0xe4182784e91f59a0e53263d6ab5f887732270f4b889b9dfeb76e670c3a62dbca); /* line */ 
        coverage_0x8c50448e(0xa1a5381e8e96920edf5ede4c1dec968e632fbb06473b9910fcfa3d1c1ff2fb71); /* statement */ 
return true;
    }

    /**
     * Destroy tokens from other account
     *
     * Remove `_value` tokens from the system irreversibly on behalf of `_from`.
     *
     * @param _from the address of the sender
     * @param _value the amount of money to burn
     */
    function burnFrom(address _from, uint256 _value) public returns (bool success) {coverage_0x8c50448e(0x850026d4707fdadd839709afcc79772bd616cf29b066169b298d29bce21845ea); /* function */ 

coverage_0x8c50448e(0xb05d53a2e9e4d727ab341abdfb6f4fff28ced6c7ed6f45bba63ba5297349eb47); /* line */ 
        if(balanceOf[_from] >= _value){}coverage_0x8c50448e(0x7f3bf714836356257985873e67fdcfc64e04f1405c0cafa4d278d94952873dec); /* requirePre */ 
coverage_0x8c50448e(0x4d4056ed2e9da2a90ac03dbb97e7b331e2a64f8778357428b4ad1fdf59ed334e); /* statement */ 
require(balanceOf[_from] >= _value);coverage_0x8c50448e(0xb68714d3722b5ad3a98dbfa5de1dec2a49d9986d765523aedb13abd5729a7af2); /* requirePost */ 
                // Check if the targeted balance is enough
coverage_0x8c50448e(0x8274b8793666cabe9ea036b9fb4585ad2fc28838b6e943426cc73c0142fd3fe9); /* line */ 
        if(_value <= allowance[_from][msg.sender]){}coverage_0x8c50448e(0x3d0899b8a0ec1e16a88da8c9734ed840afedbb764786130dc775bbacc3838b10); /* requirePre */ 
coverage_0x8c50448e(0x3af8762cf40c45f9802d79bee5a70bb31dbfe30fd9a6179de2c02936a6d083d1); /* statement */ 
require(_value <= allowance[_from][msg.sender]);coverage_0x8c50448e(0x31f59243a17b28a7d15a5a80b00c4c4f443bde3cf2a2809eb85f9e473ee9285e); /* requirePost */ 
    // Check allowance
coverage_0x8c50448e(0x305dacc3e521f901bbd466b1c8362debcced0b4f890add16e8e9cf631b00a736); /* line */ 
        coverage_0x8c50448e(0x64fab9a0b9fa80cbfb5fd9cef12b50865b0f895a0b0ba99f6fa715dc5f5cdd31); /* statement */ 
balanceOf[_from] -= _value;                         // Subtract from the targeted balance
coverage_0x8c50448e(0xad6d68cd332a69d12473145027bf51fd5e14973d161a0f224432a2bad026140c); /* line */ 
        coverage_0x8c50448e(0x1042e11a8a304ad4b5c5f924678b23dd85d05fb96f47f0c619f501eb9b7f599b); /* statement */ 
allowance[_from][msg.sender] -= _value;             // Subtract from the sender's allowance
coverage_0x8c50448e(0xe3bd32eb79cd241fb5b6680e583b525544506fa8c736d5dcf81b2bc354c1d63e); /* line */ 
        coverage_0x8c50448e(0x14ef50866252c7d7ffb8954d6eb51a71686c03138c9695475f0da56198029154); /* statement */ 
totalSupply -= _value;                              // Update totalSupply
coverage_0x8c50448e(0xb4e2d3037c33ea04848ee8c2b56bd1d84dcf88c1ebc07dab12dc32b954eeaa16); /* line */ 
        coverage_0x8c50448e(0xe769b1a3588ae794d1c96b2d095f6a4fab76211016d60e17985d628871dd4255); /* statement */ 
emit Burn(_from, _value);
coverage_0x8c50448e(0xd8f817a47f36d5dbb39bc28edf53964a2e0014fbb6d5a34b5480aeb042747673); /* line */ 
        coverage_0x8c50448e(0xaa306d13e820ea6455ca25d6b3f42f8fdad57cad2e919b5d38202f8029965c30); /* statement */ 
return true;
    }
}