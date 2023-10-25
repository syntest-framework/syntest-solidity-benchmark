const ThriftToken = artifacts.require("ThriftToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ThriftToken', (accounts) => {
	it('test for ThriftToken', async () => {
		const ThriftTokenyBhSbXR = await ThriftToken.new({from: accounts[0]});
		const uintuz2dW9f = BigInt("1961")
		const addresstk7XQOk = accounts[1]
		const addresseRhTu6C = accounts[4]
		const addressY0kwmN = accounts[4]
		const addressm5coEHO = accounts[2]
		const uintwzrNifC = BigInt("1920")
		const addressp35iW8s = accounts[1]
		const uintyBUPYRN = BigInt("302")
		const addressS6BwilK = accounts[3]
		const boolQXeXbJL = await ThriftTokenyBhSbXR.decreaseApproval.call(addresstk7XQOk, uintuz2dW9f, {from: accounts[2]});
		const uint256h8j6kao = await ThriftTokenyBhSbXR.allowance.call(addressY0kwmN, addresseRhTu6C, {from: accounts[5]});
		const addressw5SAVEG = await ThriftTokenyBhSbXR.transferOwnership.call(addressm5coEHO, {from: accounts[0]});
		const boolh8R6g4W = await ThriftTokenyBhSbXR.approve.call(addressp35iW8s, uintwzrNifC, {from: accounts[2]});
		const boolgk4vsvH = await ThriftTokenyBhSbXR.approve.call(addressS6BwilK, uintyBUPYRN, {from: accounts[3]});

		assert.equal(boolQXeXbJL, true)
		assert.equal(boolh8R6g4W, true)
		assert.equal(uint256h8j6kao, BigInt("0"))
		await expect(ThriftTokenyBhSbXR.approve.call(addressS6BwilK, uintyBUPYRN, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenDiRwYLp = await ThriftToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintVhbZPmT = BigInt("1630")
		const addressDAkxrwV = accounts[4]
		const addresszvGfciW = accounts[2]
		const boolWZP7t6x = await ThriftTokenDiRwYLp.transfer.call(addressDAkxrwV, uintVhbZPmT, {from: accounts[3]});
		const addressFogtB04 = await ThriftTokenDiRwYLp.transferOwnership.call(addresszvGfciW, {from: accounts[5]});
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenAW5YT6T = await ThriftToken.new({from: accounts[0]});
		const uintkVYmWTr = BigInt("574")
		const addresspndlYck = accounts[1]
		const addressGT67ylr = accounts[5]
		const addresszIPIPr0 = accounts[4]
		const addressv95F4dm = accounts[3]
		const boolf7SFuaZ = await ThriftTokenAW5YT6T.approve.call(addresspndlYck, uintkVYmWTr, {from: accounts[3]});
		const uint256b7OUocd = await ThriftTokenAW5YT6T.allowance.call(addresszIPIPr0, addressGT67ylr, {from: accounts[5]});
		const uint256GDf45k = await ThriftTokenAW5YT6T.balanceOf.call(addressv95F4dm, {from: accounts[0]});

		assert.equal(boolf7SFuaZ, true)
		assert.equal(uint256GDf45k, BigInt("0"))
		assert.equal(uint256b7OUocd, BigInt("0"))
	});

	it('test for ThriftToken', async () => {
		const ThriftTokene1WmTA = await ThriftToken.new({from: accounts[2]});
		const uintGEh1qIn = BigInt("83")
		const addressAoX8K6U = accounts[1]
		const addressFyBc4De = accounts[0]
		const uintCZkQvpe = BigInt("1247")
		const addressgZV9R9y = accounts[2]
		const boolFqE1Gks = await ThriftTokene1WmTA.approve.call(addressAoX8K6U, uintGEh1qIn, {from: accounts[5]});
		const uint256tVMUHsa = await ThriftTokene1WmTA.transferableTokens.call(addressFyBc4De, {from: accounts[1]});
		const boolTCnyMSq = await ThriftTokene1WmTA.decreaseApproval.call(addressgZV9R9y, uintCZkQvpe, {from: accounts[3]});

		assert.equal(boolFqE1Gks, true)
		assert.equal(boolTCnyMSq, true)
		assert.equal(uint256tVMUHsa, BigInt("0"))
	});

	it('test for ThriftToken', async () => {
		const ThriftTokensCkio65 = await ThriftToken.new({from: accounts[2]});
		const uintpBGqlU = BigInt("1408")
		const addressTpoldoA = accounts[2]
		const uintNKAuauE = BigInt("80")
		const addressiwjvj3a = accounts[0]
		const addressln5Ff7A = accounts[0]
		const addressLtQus9n = accounts[2]
		const boolsUcyovU = await ThriftTokensCkio65.decreaseApproval.call(addressTpoldoA, uintpBGqlU, {from: "0x0000000000000000000000000000000000000001"});
		const bool5pQnad = await ThriftTokensCkio65.increaseApproval.call(addressiwjvj3a, uintNKAuauE, {from: accounts[5]});
		const addressRI0yWsX = await ThriftTokensCkio65.transferOwnership.call(addressln5Ff7A, {from: accounts[1]});
		const uint256vCuWNsi = await ThriftTokensCkio65.balanceOf.call(addressLtQus9n, {from: accounts[4]});

		assert.equal(bool5pQnad, true)
		assert.equal(boolsUcyovU, true)
		await expect(ThriftTokensCkio65.transferOwnership.call(addressln5Ff7A, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenzpI5mGT = await ThriftToken.new({from: accounts[4]});
		const addressfbwqPPx = "0x0000000000000000000000000000000000000001"
		const addressJjEz9Ip = accounts[4]
		const uintUvNiTcu = BigInt("897")
		const address9UiLLn = accounts[3]
		const uintBe35sAw = BigInt("712")
		const addressUpiTIzu = accounts[0]
		const uint256BXYJez = await ThriftTokenzpI5mGT.allowance.call(addressJjEz9Ip, addressfbwqPPx, {from: accounts[2]});
		const boolKoaAVci = await ThriftTokenzpI5mGT.transfer.call(address9UiLLn, uintUvNiTcu, {from: accounts[0]});
		const boolwVz9qeX = await ThriftTokenzpI5mGT.approve.call(addressUpiTIzu, uintBe35sAw, {from: accounts[4]});

		assert.equal(uint256BXYJez, BigInt("0"))
		await expect(ThriftTokenzpI5mGT.transfer.call(address9UiLLn, uintUvNiTcu, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenIwVIkRp = await ThriftToken.new({from: accounts[0]});
		const uintKIi11V7 = BigInt("1850")
		const addressRGgWZfV = accounts[4]
		const uintLpWxG80 = BigInt("1044")
		const addressmseIGNb = accounts[1]
		const uintqh24Jn = BigInt("842")
		const addressmWD4xOp = accounts[3]
		const addressvXjpDW9 = accounts[4]
		const addressPnJzV0J = accounts[1]
		const boolo9bhS8h = await ThriftTokenIwVIkRp.approve.call(addressRGgWZfV, uintKIi11V7, {from: accounts[2]});
		const boolxMnBXuc = await ThriftTokenIwVIkRp.increaseApproval.call(addressmseIGNb, uintLpWxG80, {from: accounts[5]});
		const boold2Txjhz = await ThriftTokenIwVIkRp.transferFrom.call(addressvXjpDW9, addressmWD4xOp, uintqh24Jn, {from: accounts[2]});
		const addresswjKguL = await ThriftTokenIwVIkRp.transferOwnership.call(addressPnJzV0J, {from: accounts[1]});

		assert.equal(boolo9bhS8h, true)
		assert.equal(boolxMnBXuc, true)
		await expect(ThriftTokenIwVIkRp.transferFrom.call(addressvXjpDW9, addressmWD4xOp, uintqh24Jn, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})