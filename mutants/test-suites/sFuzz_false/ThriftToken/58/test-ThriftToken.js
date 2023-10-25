const ThriftToken = artifacts.require("ThriftToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ThriftToken', (accounts) => {
	it('test for ThriftToken', async () => {
		const ThriftTokenFW8D0px = await ThriftToken.new({from: accounts[1]});
		const uintf3gRYQ0 = BigInt("66")
		const addressQa5aUo = accounts[0]
		const uint68nM3o = BigInt("336")
		const addressEhJhpYu = "0x0000000000000000000000000000000000000001"
		const boolG7WYu6C = await ThriftTokenFW8D0px.approve.call(addressQa5aUo, uintf3gRYQ0, {from: accounts[1]});
//		const boolfB1c6SU = await ThriftTokenFW8D0px.approve.call(addressEhJhpYu, uint68nM3o, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolG7WYu6C, true)
		await expect(ThriftTokenFW8D0px.approve.call(addressEhJhpYu, uint68nM3o, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenCgxODyC = await ThriftToken.new({from: accounts[4]});
		const uintVtnJFl6 = BigInt("630")
		const addressdrC30TL = "0x0000000000000000000000000000000000000001"
		const addressrV1vb0T = accounts[4]
		const addressacTQEEL = accounts[2]
		const uintzB1ldHA = BigInt("349")
		const addresshcnOt5v = "0x0000000000000000000000000000000000000001"
		const boolK2V6XvP = await ThriftTokenCgxODyC.decreaseApproval.call(addressdrC30TL, uintVtnJFl6, {from: accounts[2]});
		const uint256CMW5D5O = await ThriftTokenCgxODyC.allowance.call(addressacTQEEL, addressrV1vb0T, {from: accounts[2]});
//		const boolQltTEFn = await ThriftTokenCgxODyC.transfer.call(addresshcnOt5v, uintzB1ldHA, {from: accounts[3]});

		assert.equal(boolK2V6XvP, true)
		assert.equal(uint256CMW5D5O, BigInt("0"))
		await expect(ThriftTokenCgxODyC.transfer.call(addresshcnOt5v, uintzB1ldHA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenftZfK6i = await ThriftToken.new({from: accounts[0]});
		const uintw5JU2R = BigInt("1906")
		const addresseLU3lod = accounts[3]
		const addressePtoXrS = accounts[4]
		const uintnaqaddP = BigInt("1932")
		const addressyMn492l = accounts[2]
		const boolv8lhILG = await ThriftTokenftZfK6i.increaseApproval.call(addresseLU3lod, uintw5JU2R, {from: accounts[4]});
//		const addressyuvzyXx = await ThriftTokenftZfK6i.transferOwnership.call(addressePtoXrS, {from: accounts[2]});
//		const boolvv11kT8 = await ThriftTokenftZfK6i.approve.call(addressyMn492l, uintnaqaddP, {from: accounts[5]});

		assert.equal(boolv8lhILG, true)
		await expect(ThriftTokenftZfK6i.transferOwnership.call(addressePtoXrS, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenDQOyWb0 = await ThriftToken.new({from: accounts[3]});
		const uinthAvZ82W = BigInt("1296")
		const address7fwHrV = accounts[3]
		const uintlMn2dXP = BigInt("1788")
		const addresswWAL7Z9 = accounts[4]
		const addressj3TvMYj = accounts[4]
		const uintjFgPJFM = BigInt("887")
		const addressDW2oB1U = accounts[0]
		const addressEbaNqNj = accounts[5]
		const addressLS4PLiq = accounts[4]
		const address9xd09g = accounts[1]
		const boolsub09HZ = await ThriftTokenDQOyWb0.decreaseApproval.call(address7fwHrV, uinthAvZ82W, {from: accounts[5]});
//		const boolp7nHhdh = await ThriftTokenDQOyWb0.transferFrom.call(addressj3TvMYj, addresswWAL7Z9, uintlMn2dXP, {from: accounts[0]});
//		const boolbj9l9iq = await ThriftTokenDQOyWb0.decreaseApproval.call(addressDW2oB1U, uintjFgPJFM, {from: "0x0000000000000000000000000000000000000001"});
//		const uint2569zUpXe = await ThriftTokenDQOyWb0.allowance.call(addressLS4PLiq, addressEbaNqNj, {from: accounts[0]});
//		const uint256PRVpsj = await ThriftTokenDQOyWb0.balanceOf.call(address9xd09g, {from: accounts[3]});

		assert.equal(boolsub09HZ, true)
		await expect(ThriftTokenDQOyWb0.transferFrom.call(addressj3TvMYj, addresswWAL7Z9, uintlMn2dXP, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenmH4SlNT = await ThriftToken.new({from: accounts[5]});
		const uintnSufxyj = BigInt("1271")
		const addressJJC2ap0 = accounts[3]
		const addressOb8Z2vC = accounts[2]
		const addressvSrPKRP = accounts[1]
		const uintSlfpnPd = BigInt("1576")
		const addresssESSRXF = accounts[0]
		const uintNaQVXEr = BigInt("1740")
		const addressKFTkUOa = accounts[2]
		const addressSd5mMP7 = accounts[2]
		const addressH8MpexU = accounts[4]
		const uintRlr0TBz = BigInt("1521")
		const addressmsyu5Bh = accounts[0]
//		const boolA5EKnq = await ThriftTokenmH4SlNT.transferFrom.call(addressOb8Z2vC, addressJJC2ap0, uintnSufxyj, {from: accounts[2]});
//		const uint256f2H7e2s = await ThriftTokenmH4SlNT.balanceOf.call(addressvSrPKRP, {from: accounts[3]});
//		const boolbkps6gl = await ThriftTokenmH4SlNT.increaseApproval.call(addresssESSRXF, uintSlfpnPd, {from: "0x0000000000000000000000000000000000000001"});
//		const boolyftUq0H = await ThriftTokenmH4SlNT.increaseApproval.call(addressKFTkUOa, uintNaQVXEr, {from: accounts[3]});
//		const uint256mJBl8jH = await ThriftTokenmH4SlNT.allowance.call(addressH8MpexU, addressSd5mMP7, {from: accounts[0]});
//		const boolwc2wnp9 = await ThriftTokenmH4SlNT.transfer.call(addressmsyu5Bh, uintRlr0TBz, {from: accounts[2]});

		await expect(ThriftTokenmH4SlNT.transferFrom.call(addressOb8Z2vC, addressJJC2ap0, uintnSufxyj, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenGOjJyPR = await ThriftToken.new({from: "0x0000000000000000000000000000000000000001"});
		const addressKVhH1v = accounts[4]
		const addressjidTQHj = accounts[0]
		const addresswkpBEt = accounts[2]
		const addressfXCPWX0 = accounts[3]
		const addressbGxXifK = accounts[0]
		const addressKLEhp1 = await ThriftTokenGOjJyPR.transferOwnership.call(addressKVhH1v, {from: accounts[1]});
		const uint256f7JB6XW = await ThriftTokenGOjJyPR.transferableTokens.call(addressjidTQHj, {from: accounts[4]});
		const uint256WGeeCoP = await ThriftTokenGOjJyPR.allowance.call(addressfXCPWX0, addresswkpBEt, {from: accounts[4]});
		const addressY45vC8 = await ThriftTokenGOjJyPR.transferOwnership.call(addressbGxXifK, {from: accounts[1]});
	});
})