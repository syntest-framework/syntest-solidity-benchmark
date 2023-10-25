const MIMOToken = artifacts.require("MIMOToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MIMOToken', (accounts) => {
	it('test for MIMOToken', async () => {
		const MIMOTokens61nKCt = await MIMOToken.new({from: accounts[5]});
		const uintVINISXM = BigInt("1303")
		const addressjDjSfK6 = accounts[1]
		const addressCCzMGk1 = accounts[1]
		const uintFWkHzlm = BigInt("1650")
		const addressrLYcrE = accounts[1]
		const uintyB0UrFc = BigInt("950")
		const addressBLAUU8r = accounts[3]
		const addresscQ6F2KT = accounts[0]
		const addressEAbIl76 = "0x0000000000000000000000000000000000000001"
		const uintTnrejx9 = BigInt("412")
		const addressKCvkji9 = accounts[3]
		const addresszUD6FBk = accounts[0]
		const boolmwnhZA1 = await MIMOTokens61nKCt.transferFrom.call(addressCCzMGk1, addressjDjSfK6, uintVINISXM, {from: accounts[3]});
		const boolR0tjCh = await MIMOTokens61nKCt.approve.call(addressrLYcrE, uintFWkHzlm, {from: accounts[3]});
		const bool6cYb6e = await MIMOTokens61nKCt.approve.call(addressBLAUU8r, uintyB0UrFc, {from: accounts[3]});
		const uintg7B0q5M = await MIMOTokens61nKCt.allowance.call(addressEAbIl76, addresscQ6F2KT, {from: accounts[1]});
		const booliveCkvS = await MIMOTokens61nKCt.approve.call(addressKCvkji9, uintTnrejx9, {from: accounts[4]});
		const uint3FdazZ = await MIMOTokens61nKCt.balanceOf.call(addresszUD6FBk, {from: accounts[2]});

		await expect(MIMOTokens61nKCt.transferFrom.call(addressCCzMGk1, addressjDjSfK6, uintVINISXM, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenapo26ks = await MIMOToken.new({from: accounts[3]});
		const uintW3x8el8 = BigInt("283")
		const addressmT9WY7h = accounts[0]
		const addressr5gjeGp = "0x0000000000000000000000000000000000000001"
		const addressZIBMVEp = accounts[4]
		const boolw0qPWT = await MIMOTokenapo26ks.approve.call(addressmT9WY7h, uintW3x8el8, {from: "0x0000000000000000000000000000000000000001"});
		const uinth4dA3O = await MIMOTokenapo26ks.allowance.call(addressZIBMVEp, addressr5gjeGp, {from: accounts[2]});
		const uintbCg7umK = await MIMOTokenapo26ks.totalSupply.call({from: accounts[1]});

		assert.equal(boolw0qPWT, true)
		assert.equal(uintbCg7umK, BigInt("16000000000000000000000000"))
		assert.equal(uinth4dA3O, BigInt("0"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenVVlrOxh = await MIMOToken.new({from: accounts[0]});
		const uintszbf6sy = BigInt("785")
		const uinteECvXcF = BigInt("1763")
		const uintob1XD24 = BigInt("1011")
		const addressRatVR3h = accounts[4]
		const uintgKUTVkR = BigInt("563")
		const uintvGrhXb = BigInt("1508")
		const addressOfZy5dW = accounts[4]
		const addressHFnTFbu = accounts[2]
		const uintCoDEoHx = BigInt("455")
		const addressq71068y = accounts[1]
		const uint256PS3Vyf = await MIMOTokenVVlrOxh.setMinFee.call(uintszbf6sy, {from: accounts[4]});
		const uint256K8advoV = await MIMOTokenVVlrOxh.setFeeRate.call(uinteECvXcF, {from: "0x0000000000000000000000000000000000000001"});
		const boolY5jNEW = await MIMOTokenVVlrOxh.approve.call(addressRatVR3h, uintob1XD24, {from: accounts[2]});
		const uint256KLelcn = await MIMOTokenVVlrOxh.setMinFee.call(uintgKUTVkR, {from: accounts[5]});
		const boolpy4De2e = await MIMOTokenVVlrOxh.transferFrom.call(addressHFnTFbu, addressOfZy5dW, uintvGrhXb, {from: "0x0000000000000000000000000000000000000001"});
		const boolPdHSH1 = await MIMOTokenVVlrOxh.transfer.call(addressq71068y, uintCoDEoHx, {from: accounts[1]});

		assert.equal(boolY5jNEW, true)
		await expect(MIMOTokenVVlrOxh.transferFrom.call(addressHFnTFbu, addressOfZy5dW, uintvGrhXb, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenyC8D70R = await MIMOToken.new({from: accounts[2]});
		const uintXwQnir = BigInt("652")
		const addressOwPdAA1 = accounts[0]
		const uinthkbQ1Jm = BigInt("376")
		const addressn3u0Osn = accounts[4]
		const addressPbvwut = accounts[1]
		const uint256JMP10hw = await MIMOTokenyC8D70R.setFeeRate.call(uintXwQnir, {from: accounts[4]});
		const uinter0j0zW = await MIMOTokenyC8D70R.balanceOf.call(addressOwPdAA1, {from: accounts[0]});
		const boolMrfZ9lK = await MIMOTokenyC8D70R.transferFrom.call(addressPbvwut, addressn3u0Osn, uinthkbQ1Jm, {from: accounts[0]});

		assert.equal(uinter0j0zW, BigInt("0"))
		await expect(MIMOTokenyC8D70R.transferFrom.call(addressPbvwut, addressn3u0Osn, uinthkbQ1Jm, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenoYyccHK = await MIMOToken.new({from: accounts[3]});
		const addressCsnIJqC = accounts[2]
		const uintQcbDCuE = BigInt("573")
		const uintNfSNMeZ = await MIMOTokenoYyccHK.balanceOf.call(addressCsnIJqC, {from: accounts[3]});
		const uint256NOtxKd = await MIMOTokenoYyccHK.getFee.call(uintQcbDCuE, {from: "0x0000000000000000000000000000000000000001"});
		const uinthKeQg6p = await MIMOTokenoYyccHK.totalSupply.call({from: accounts[5]});

		assert.equal(uint256NOtxKd, BigInt("50000000000000000"))
		assert.equal(uintNfSNMeZ, BigInt("0"))
		assert.equal(uinthKeQg6p, BigInt("16000000000000000000000000"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenapo26ks = await MIMOToken.new({from: accounts[3]});
		const uintv3p9RO = BigInt("891")
		const addressTgnDfmG = accounts[4]
		const uintWY4bv5T = BigInt("283")
		const addressZDSIdY8 = accounts[0]
		const uintrfvk1tm = BigInt("572")
		const addressWO7R04U = accounts[3]
		const addressA3VTXzI = "0x0000000000000000000000000000000000000001"
		const address54OXJy = accounts[5]
		const boolmkOVhR9 = await MIMOTokenapo26ks.approve.call(addressTgnDfmG, uintv3p9RO, {from: accounts[4]});
		const boolw0qPWT = await MIMOTokenapo26ks.approve.call(addressZDSIdY8, uintWY4bv5T, {from: "0x0000000000000000000000000000000000000001"});
		const boolF0pQ5A = await MIMOTokenapo26ks.transfer.call(addressWO7R04U, uintrfvk1tm, {from: accounts[2]});
		const uinth4dA3O = await MIMOTokenapo26ks.allowance.call(address54OXJy, addressA3VTXzI, {from: accounts[2]});
		const uintbCg7umK = await MIMOTokenapo26ks.totalSupply.call({from: accounts[1]});

		assert.equal(boolmkOVhR9, true)
		assert.equal(boolw0qPWT, true)
		await expect(MIMOTokenapo26ks.transfer.call(addressWO7R04U, uintrfvk1tm, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})