const ThriftToken = artifacts.require("ThriftToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ThriftToken', (accounts) => {
	it('test for ThriftToken', async () => {
		const ThriftTokenAsHtBHy = await ThriftToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintydzpQtq = BigInt("1865")
		const addressraD0HwV = accounts[3]
		const uintzfuvSzW = BigInt("1081")
		const addressmLj7nl = "0x0000000000000000000000000000000000000001"
		const addressy3WJ4Mf = accounts[1]
		const addressOp4EtbE = accounts[5]
		const uintsfy8g6o = BigInt("1459")
		const addressxMKUxh9 = "0x0000000000000000000000000000000000000001"
		const uintxSCO8eE = BigInt("1200")
		const addressX5fJlEX = accounts[4]
		const boolPb3gh7v = await ThriftTokenAsHtBHy.approve.call(addressraD0HwV, uintydzpQtq, {from: accounts[2]});
		const boolJp7xhSW = await ThriftTokenAsHtBHy.transferFrom.call(addressy3WJ4Mf, addressmLj7nl, uintzfuvSzW, {from: accounts[1]});
		const addressQxPh4QJ = await ThriftTokenAsHtBHy.transferOwnership.call(addressOp4EtbE, {from: accounts[0]});
		const boolQdXUlP6 = await ThriftTokenAsHtBHy.increaseApproval.call(addressxMKUxh9, uintsfy8g6o, {from: accounts[4]});
		const boolqgKDjOI = await ThriftTokenAsHtBHy.decreaseApproval.call(addressX5fJlEX, uintxSCO8eE, {from: accounts[1]});
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenLfiSLnT = await ThriftToken.new({from: accounts[1]});
		const uintyY34npy = BigInt("1073")
		const addresse4hrbmw = accounts[1]
		const addresshNC9PP3 = "0x0000000000000000000000000000000000000001"
		const addressnYCdgT = accounts[1]
		const addressgimDlJp = accounts[2]
		const addressbbNQO32 = accounts[0]
		const boolKw88aZX = await ThriftTokenLfiSLnT.increaseApproval.call(addresse4hrbmw, uintyY34npy, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Z8S01RE = await ThriftTokenLfiSLnT.transferableTokens.call(addresshNC9PP3, {from: accounts[3]});
		const uint256SXfRl2H = await ThriftTokenLfiSLnT.allowance.call(addressgimDlJp, addressnYCdgT, {from: accounts[0]});
		const uint256Z20GbIo = await ThriftTokenLfiSLnT.transferableTokens.call(addressbbNQO32, {from: accounts[4]});

		assert.equal(boolKw88aZX, true)
		assert.equal(uint256SXfRl2H, BigInt("0"))
		assert.equal(uint256Z20GbIo, BigInt("0"))
		assert.equal(uint256Z8S01RE, BigInt("0"))
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenFmrog9n = await ThriftToken.new({from: accounts[0]});
		const addresskHIawin = accounts[4]
		const uintVUH2NfB = BigInt("391")
		const addressWELPsG = accounts[3]
		const addressB1NDVdf = accounts[5]
		const addressipV2Cnc = accounts[1]
		const uintwnVco8U = BigInt("152")
		const addresspNGlVib = accounts[4]
		const uintbAgaH1i = BigInt("823")
		const addressqGVNurV = accounts[4]
//		const addressArG4bIB = await ThriftTokenFmrog9n.transferOwnership.call(addresskHIawin, {from: accounts[3]});
//		const boolXSM7Pyj = await ThriftTokenFmrog9n.approve.call(addressWELPsG, uintVUH2NfB, {from: accounts[2]});
//		const uint256dMesdSY = await ThriftTokenFmrog9n.allowance.call(addressipV2Cnc, addressB1NDVdf, {from: accounts[5]});
//		const boolekEIw0K = await ThriftTokenFmrog9n.decreaseApproval.call(addresspNGlVib, uintwnVco8U, {from: accounts[2]});
//		const boolxlwoT0n = await ThriftTokenFmrog9n.transfer.call(addressqGVNurV, uintbAgaH1i, {from: accounts[0]});

		await expect(ThriftTokenFmrog9n.transferOwnership.call(addresskHIawin, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenOx0juGj = await ThriftToken.new({from: accounts[1]});
		const uintD1Zckt8 = BigInt("283")
		const addressZCNZlJV = accounts[0]
		const addressHAg9yr6 = accounts[4]
		const uintg8r34Ys = BigInt("446")
		const addressZegQzv = accounts[3]
		const boolbjYpc3B = await ThriftTokenOx0juGj.increaseApproval.call(addressZCNZlJV, uintD1Zckt8, {from: accounts[1]});
		const uint256dn2Oq38 = await ThriftTokenOx0juGj.transferableTokens.call(addressHAg9yr6, {from: accounts[4]});
//		const boolenGQXyT = await ThriftTokenOx0juGj.transfer.call(addressZegQzv, uintg8r34Ys, {from: accounts[5]});

		assert.equal(boolbjYpc3B, true)
		assert.equal(uint256dn2Oq38, BigInt("0"))
		await expect(ThriftTokenOx0juGj.transfer.call(addressZegQzv, uintg8r34Ys, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenSKAuCpU = await ThriftToken.new({from: accounts[4]});
		const addressojZRCj = accounts[3]
		const uintUDcOQpi = BigInt("705")
		const addressNgPJ8a = accounts[5]
		const uintnJxapOL = BigInt("531")
		const addressDTYEq4x = accounts[2]
		const uintsW8ZEIs = BigInt("867")
		const addressxm3IeGR = accounts[4]
		const uint256qTJa13p = await ThriftTokenSKAuCpU.balanceOf.call(addressojZRCj, {from: accounts[2]});
		const boolJsUTpcu = await ThriftTokenSKAuCpU.increaseApproval.call(addressNgPJ8a, uintUDcOQpi, {from: accounts[0]});
		const boolWTbiSs7 = await ThriftTokenSKAuCpU.approve.call(addressDTYEq4x, uintnJxapOL, {from: accounts[1]});
//		const boolXoNo62S = await ThriftTokenSKAuCpU.transfer.call(addressxm3IeGR, uintsW8ZEIs, {from: accounts[2]});

		assert.equal(boolJsUTpcu, true)
		assert.equal(boolWTbiSs7, true)
		assert.equal(uint256qTJa13p, BigInt("0"))
		await expect(ThriftTokenSKAuCpU.transfer.call(addressxm3IeGR, uintsW8ZEIs, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenypiqT4k = await ThriftToken.new({from: accounts[4]});
		const addressoTgUuWj = accounts[3]
		const uinti8Rk77 = BigInt("285")
		const addressmQPi2Q4 = accounts[5]
		const addressNavjwWi = accounts[1]
		const uintBID3KjF = BigInt("1653")
		const addressGG4dhqS = "0x0000000000000000000000000000000000000001"
		const addressm8mn190 = await ThriftTokenypiqT4k.transferOwnership.call(addressoTgUuWj, {from: accounts[4]});
//		const boolqRQvbEM = await ThriftTokenypiqT4k.transferFrom.call(addressNavjwWi, addressmQPi2Q4, uinti8Rk77, {from: accounts[5]});
//		const boolwh0oKYL = await ThriftTokenypiqT4k.transfer.call(addressGG4dhqS, uintBID3KjF, {from: accounts[0]});

		await expect(ThriftTokenypiqT4k.transferFrom.call(addressNavjwWi, addressmQPi2Q4, uinti8Rk77, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ThriftToken', async () => {
		const ThriftTokenDI3DJzj = await ThriftToken.new({from: accounts[2]});
		const uintIuV3q0x = BigInt("860")
		const addressS6ezAxI = accounts[1]
		const addressysOpFYO = accounts[4]
		const boolTE3rtW8 = await ThriftTokenDI3DJzj.decreaseApproval.call(addressS6ezAxI, uintIuV3q0x, {from: accounts[0]});
//		const addresstgS08S = await ThriftTokenDI3DJzj.transferOwnership.call(addressysOpFYO, {from: accounts[3]});

		assert.equal(boolTE3rtW8, true)
		await expect(ThriftTokenDI3DJzj.transferOwnership.call(addressysOpFYO, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})