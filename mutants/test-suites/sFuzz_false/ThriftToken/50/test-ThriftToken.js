const ThriftToken = artifacts.require("ThriftToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ThriftToken', (accounts) => {
	it('test for ThriftToken', async () => {
		const ThriftTokenXbvcBzB = await ThriftToken.new({from: accounts[1]});
		const uintehOZJa7 = BigInt("565")
		const addressKCg6iBu = accounts[5]
		const uintP4yMBfn = BigInt("431")
		const addressiuTRrG0 = accounts[0]
		const uintzYxcBJY = BigInt("950")
		const addressUgWqENe = accounts[4]
		const uintId8Hx00 = BigInt("1717")
		const addressA69WCHv = accounts[2]
		const boolkBrDQrM = await ThriftTokenXbvcBzB.decreaseApproval.call(addressKCg6iBu, uintehOZJa7, {from: accounts[3]});
		const boolHxzkjIu = await ThriftTokenXbvcBzB.decreaseApproval.call(addressiuTRrG0, uintP4yMBfn, {from: accounts[4]});
//		const boolQHIHjWX = await ThriftTokenXbvcBzB.transfer.call(addressUgWqENe, uintzYxcBJY, {from: accounts[0]});
//		const boolCw27qoP = await ThriftTokenXbvcBzB.approve.call(addressA69WCHv, uintId8Hx00, {from: accounts[3]});

		assert.equal(boolHxzkjIu, true)
		assert.equal(boolkBrDQrM, true)
		await expect(ThriftTokenXbvcBzB.transfer.call(addressUgWqENe, uintzYxcBJY, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenbUxfruT = await ThriftToken.new({from: accounts[0]});
		const uintvQMkPSr = BigInt("1220")
		const addressjz4vgjO = accounts[2]
		const addressphhPA6d = accounts[5]
		const uintQ2dDioX = BigInt("459")
		const addressF2Fu7r8 = accounts[5]
		const addressVGCx62F = accounts[4]
		const uintRz8JvKX = BigInt("1188")
		const addressCB5j7ww = accounts[3]
//		const boolD8C0Dx = await ThriftTokenbUxfruT.transferFrom.call(addressphhPA6d, addressjz4vgjO, uintvQMkPSr, {from: "0x0000000000000000000000000000000000000001"});
//		const boolJQtSFM = await ThriftTokenbUxfruT.transferFrom.call(addressVGCx62F, addressF2Fu7r8, uintQ2dDioX, {from: accounts[5]});
//		const bool02BQtK = await ThriftTokenbUxfruT.increaseApproval.call(addressCB5j7ww, uintRz8JvKX, {from: accounts[2]});

		await expect(ThriftTokenbUxfruT.transferFrom.call(addressphhPA6d, addressjz4vgjO, uintvQMkPSr, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenCCa9p6s = await ThriftToken.new({from: accounts[5]});
		const uintdxLKXgL = BigInt("1538")
		const addressaWMERqS = accounts[5]
		const uintxONn5G4 = BigInt("75")
		const addresspabTZ43 = accounts[5]
		const addressnESnUWq = accounts[4]
		const addressJuZbcoj = accounts[3]
		const uintPtSv5Gi = BigInt("1463")
		const addressM89gdyu = accounts[5]
		const addressY68raKk = accounts[1]
		const boolittYRSm = await ThriftTokenCCa9p6s.approve.call(addressaWMERqS, uintdxLKXgL, {from: accounts[3]});
//		const boolXNOeK8A = await ThriftTokenCCa9p6s.transferFrom.call(addressnESnUWq, addresspabTZ43, uintxONn5G4, {from: accounts[4]});
//		const uint256jHqDM1y = await ThriftTokenCCa9p6s.balanceOf.call(addressJuZbcoj, {from: accounts[0]});
//		const boolYy56tpR = await ThriftTokenCCa9p6s.increaseApproval.call(addressM89gdyu, uintPtSv5Gi, {from: accounts[0]});
//		const addressh6CX1r = await ThriftTokenCCa9p6s.transferOwnership.call(addressY68raKk, {from: accounts[4]});

		assert.equal(boolittYRSm, true)
		await expect(ThriftTokenCCa9p6s.transferFrom.call(addressnESnUWq, addresspabTZ43, uintxONn5G4, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokensXL8KgC = await ThriftToken.new({from: accounts[0]});
		const uintOaN24G0 = BigInt("1227")
		const addresstS6BCX8 = accounts[1]
		const uintkyVeUBz = BigInt("1472")
		const addressjZaHPWz = accounts[1]
		const addressQWgbZ5P = accounts[2]
		const uints35wvb = BigInt("958")
		const addressucNV6z8 = "0x0000000000000000000000000000000000000001"
		const addressZMKnIZK = accounts[1]
		const uintdhjHM4f = BigInt("354")
		const addressprcj40y = accounts[2]
		const uintaz8yLE = BigInt("119")
		const addressVfopdY = accounts[5]
		const boolz9w8HG0 = await ThriftTokensXL8KgC.decreaseApproval.call(addresstS6BCX8, uintOaN24G0, {from: accounts[3]});
		const boolskboFhe = await ThriftTokensXL8KgC.approve.call(addressjZaHPWz, uintkyVeUBz, {from: "0x0000000000000000000000000000000000000001"});
//		const addresstP22pS = await ThriftTokensXL8KgC.transferOwnership.call(addressQWgbZ5P, {from: accounts[4]});
//		const boold022jey = await ThriftTokensXL8KgC.transferFrom.call(addressZMKnIZK, addressucNV6z8, uints35wvb, {from: accounts[4]});
//		const boolOfhwHlL = await ThriftTokensXL8KgC.transfer.call(addressprcj40y, uintdhjHM4f, {from: accounts[2]});
//		const boolYst9yyS = await ThriftTokensXL8KgC.approve.call(addressVfopdY, uintaz8yLE, {from: accounts[4]});

		assert.equal(boolskboFhe, true)
		assert.equal(boolz9w8HG0, true)
		await expect(ThriftTokensXL8KgC.transferOwnership.call(addressQWgbZ5P, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokeniJ1htlN = await ThriftToken.new({from: accounts[2]});
		const addressHb0Xdp = accounts[0]
		const addressUp5OmXb = accounts[0]
		const addressZlKWGRW = accounts[2]
		const addresssdWHsRf = accounts[4]
		const uintWEot2A8 = BigInt("356")
		const addresshCs3db = accounts[4]
		const uintLh4oviD = BigInt("439")
		const addressL8i1S1C = accounts[5]
		const addressZuu6CBe = accounts[0]
		const uint256Dc19BYW = await ThriftTokeniJ1htlN.allowance.call(addressUp5OmXb, addressHb0Xdp, {from: "0x0000000000000000000000000000000000000001"});
		const uint256ktvIJS = await ThriftTokeniJ1htlN.allowance.call(addresssdWHsRf, addressZlKWGRW, {from: accounts[2]});
		const boolnwHVBBf = await ThriftTokeniJ1htlN.approve.call(addresshCs3db, uintWEot2A8, {from: accounts[3]});
		const boolX8nKhCu = await ThriftTokeniJ1htlN.increaseApproval.call(addressL8i1S1C, uintLh4oviD, {from: accounts[2]});
//		const addressnbfoPt2 = await ThriftTokeniJ1htlN.transferOwnership.call(addressZuu6CBe, {from: accounts[3]});

		assert.equal(boolX8nKhCu, true)
		assert.equal(boolnwHVBBf, true)
		assert.equal(uint256Dc19BYW, BigInt("0"))
		assert.equal(uint256ktvIJS, BigInt("0"))
		await expect(ThriftTokeniJ1htlN.transferOwnership.call(addressZuu6CBe, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenetfg0fH = await ThriftToken.new({from: "0x0000000000000000000000000000000000000001"});
		const addressbiEQ9yN = accounts[4]
		const addressMQ1c5Mq = accounts[3]
		const uintxluF7K1 = BigInt("1087")
		const addressKPaVK4W = accounts[5]
		const uint4Uo95X = BigInt("1355")
		const addressqV1uPw = accounts[3]
		const addressmAmrZYd = accounts[3]
		const uintqLDww3 = BigInt("440")
		const addressahNP3mS = accounts[4]
		const uint256MPVxTN9 = await ThriftTokenetfg0fH.allowance.call(addressMQ1c5Mq, addressbiEQ9yN, {from: accounts[4]});
		const boolNfIse9x = await ThriftTokenetfg0fH.decreaseApproval.call(addressKPaVK4W, uintxluF7K1, {from: accounts[0]});
		const booleL80X3H = await ThriftTokenetfg0fH.transferFrom.call(addressmAmrZYd, addressqV1uPw, uint4Uo95X, {from: accounts[3]});
		const boolOB0brR = await ThriftTokenetfg0fH.increaseApproval.call(addressahNP3mS, uintqLDww3, {from: accounts[3]});
	});
})