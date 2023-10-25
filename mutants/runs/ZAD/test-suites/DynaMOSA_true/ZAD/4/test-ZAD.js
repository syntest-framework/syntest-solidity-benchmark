const ZAD = artifacts.require("ZAD");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ZAD', (accounts) => {
	it('test for ZAD', async () => {
		const ZADSxjn3Yq = await ZAD.new({from: accounts[2]});
		const addressI8GVrSU = accounts[1]
		const addressb1AE9g8 = "0x0000000000000000000000000000000000000001"
		const uint8PlSsvQ = await ZADSxjn3Yq.decimals.call({from: accounts[1]});
		const uint256WhCTT90 = await ZADSxjn3Yq.allowance.call(addressb1AE9g8, addressI8GVrSU, {from: accounts[4]});

		assert.equal(uint256WhCTT90, BigInt("0"))
		assert.equal(uint8PlSsvQ, BigInt("18"))
	});

	it('test for ZAD', async () => {
		const ZADCUiooek = await ZAD.new({from: accounts[4]});
		const uintWO36eyL = BigInt("311")
		const addressmOQocR2 = accounts[5]
		const uinthvMs5dF = BigInt("1467")
		const addresshT7A7AQ = accounts[5]
		const stringmwO4uIN = await ZADCUiooek.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const booloRc7Rjt = await ZADCUiooek.decreaseAllowance.call(addressmOQocR2, uintWO36eyL, {from: accounts[1]});
		const boolrCvtvQd = await ZADCUiooek.transfer.call(addresshT7A7AQ, uinthvMs5dF, {from: accounts[2]});

		assert.equal(stringmwO4uIN, "ZAD")
		await expect(ZADCUiooek.decreaseAllowance.call(addressmOQocR2, uintWO36eyL, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADf6wIynX = await ZAD.new({from: accounts[3]});
		const uintw9FOzb1 = BigInt("1377")
		const addresstC3ElxC = accounts[3]
		const uint8slZFlu = await ZADf6wIynX.decimals.call({from: accounts[2]});
		const uint8gKE37Rn = await ZADf6wIynX.decimals.call({from: accounts[3]});
		const uint8yqU1eO = await ZADf6wIynX.decimals.call({from: accounts[3]});
		const uint256BKZTUzJ = await ZADf6wIynX.totalSupply.call({from: accounts[4]});
		const boollJo9lPz = await ZADf6wIynX.decreaseAllowance.call(addresstC3ElxC, uintw9FOzb1, {from: accounts[3]});

		assert.equal(uint256BKZTUzJ, BigInt("100000000000000000000000000"))
		assert.equal(uint8gKE37Rn, BigInt("18"))
		assert.equal(uint8slZFlu, BigInt("18"))
		assert.equal(uint8yqU1eO, BigInt("18"))
		await expect(ZADf6wIynX.decreaseAllowance.call(addresstC3ElxC, uintw9FOzb1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADvYHw59 = await ZAD.new({from: accounts[1]});
		const addressGSuHEjO = accounts[0]
		const uintPcnbnNu = BigInt("1115")
		const addresseYPxWUU = accounts[2]
		const uint256befjy9i = await ZADvYHw59.balanceOf.call(addressGSuHEjO, {from: accounts[0]});
		const boolF6q2RGw = await ZADvYHw59.decreaseAllowance.call(addresseYPxWUU, uintPcnbnNu, {from: accounts[3]});
		const uint256NyuL8O4 = await ZADvYHw59.totalSupply.call({from: accounts[4]});

		assert.equal(uint256befjy9i, BigInt("0"))
		await expect(ZADvYHw59.decreaseAllowance.call(addresseYPxWUU, uintPcnbnNu, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADvXGvSLd = await ZAD.new({from: accounts[1]});
		const uinttlEeKOx = BigInt("56")
		const addressHnvDpjd = "0x0000000000000000000000000000000000000001"
		const uintZCZr5b = BigInt("338")
		const addressERCnaVY = accounts[1]
		const stringvW8Ga1r = await ZADvXGvSLd.symbol.call({from: accounts[0]});
		const stringdAx9T0t = await ZADvXGvSLd.symbol.call({from: accounts[2]});
		const boolPf5Ur9r = await ZADvXGvSLd.increaseAllowance.call(addressHnvDpjd, uinttlEeKOx, {from: accounts[5]});
		const boolF2utgdn = await ZADvXGvSLd.decreaseAllowance.call(addressERCnaVY, uintZCZr5b, {from: accounts[4]});
		const uint8tzTKMxL = await ZADvXGvSLd.decimals.call({from: accounts[5]});

		assert.equal(boolPf5Ur9r, true)
		assert.equal(stringdAx9T0t, "ZAD")
		assert.equal(stringvW8Ga1r, "ZAD")
		await expect(ZADvXGvSLd.decreaseAllowance.call(addressERCnaVY, uintZCZr5b, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADgzWXsfo = await ZAD.new({from: accounts[1]});
		const uintCBlRZPH = BigInt("285")
		const addressUJMR6gI = accounts[2]
		const uintFW45RhC = BigInt("1042")
		const addressQRLDgxD = accounts[2]
		const uintvLebq8f = BigInt("205")
		const addresstJ5hmJL = accounts[3]
		const boolsxuOrQE = await ZADgzWXsfo.increaseAllowance.call(addressUJMR6gI, uintCBlRZPH, {from: accounts[1]});
		const boolTEcZLJ7 = await ZADgzWXsfo.transfer.call(addressQRLDgxD, uintFW45RhC, {from: accounts[5]});
		const boolkLEkaKM = await ZADgzWXsfo.increaseAllowance.call(addresstJ5hmJL, uintvLebq8f, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolsxuOrQE, true)
		await expect(ZADgzWXsfo.transfer.call(addressQRLDgxD, uintFW45RhC, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADQxsvyuD = await ZAD.new({from: accounts[2]});
		const uintRKBPDOl = BigInt("1832")
		const addressTW83mX = accounts[4]
		const address96qwuC = accounts[4]
		const uintofgm97 = BigInt("1489")
		const addressNN5detQ = accounts[3]
		const stringoSCjWmR = await ZADQxsvyuD.name.call({from: accounts[0]});
		const boolYGgcGzW = await ZADQxsvyuD.transferFrom.call(address96qwuC, addressTW83mX, uintRKBPDOl, {from: accounts[3]});
		const boolgjnRVnr = await ZADQxsvyuD.approve.call(addressNN5detQ, uintofgm97, {from: accounts[2]});
		const stringGFxhmm = await ZADQxsvyuD.symbol.call({from: accounts[3]});
		const uint8IyhsPQo = await ZADQxsvyuD.decimals.call({from: accounts[3]});

		assert.equal(stringoSCjWmR, "Zadkiel")
		await expect(ZADQxsvyuD.transferFrom.call(address96qwuC, addressTW83mX, uintRKBPDOl, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADP4Xn0M3 = await ZAD.new({from: accounts[4]});
		const uintmxmTtAs = BigInt("1153")
		const addressJ9mIcHw = accounts[1]
		const uintvrm5fy8 = BigInt("923")
		const addressko6M3oM = accounts[1]
		const addressNLscQb = accounts[5]
		const uintmNvq7vL = BigInt("1331")
		const addressvPXn556 = accounts[3]
		const boollwhRiiu = await ZADP4Xn0M3.approve.call(addressJ9mIcHw, uintmxmTtAs, {from: accounts[2]});
		const boolQVUof6z = await ZADP4Xn0M3.transferFrom.call(addressNLscQb, addressko6M3oM, uintvrm5fy8, {from: accounts[0]});
		const boolG1NQf4t = await ZADP4Xn0M3.transfer.call(addressvPXn556, uintmNvq7vL, {from: accounts[2]});

		assert.equal(boollwhRiiu, true)
		await expect(ZADP4Xn0M3.transferFrom.call(addressNLscQb, addressko6M3oM, uintvrm5fy8, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADvXGvSLd = await ZAD.new({from: accounts[1]});
		const uintqAvj7x = BigInt("56")
		const addressxUUf2kB = "0x0000000000000000000000000000000000000000"
		const uinttzH7Lev = BigInt("338")
		const addressXX1l7vc = accounts[1]
		const uintr8387PR = BigInt("1658")
		const addressHucM6A = accounts[3]
		const stringS2iQyvW = await ZADvXGvSLd.name.call({from: accounts[5]});
		const stringdAx9T0t = await ZADvXGvSLd.symbol.call({from: accounts[2]});
		const boolPf5Ur9r = await ZADvXGvSLd.increaseAllowance.call(addressxUUf2kB, uintqAvj7x, {from: accounts[5]});
		const boolF2utgdn = await ZADvXGvSLd.decreaseAllowance.call(addressXX1l7vc, uinttzH7Lev, {from: accounts[4]});
		const boolCdbQsqY = await ZADvXGvSLd.approve.call(addressHucM6A, uintr8387PR, {from: "0x0000000000000000000000000000000000000001"});
		const uint8tzTKMxL = await ZADvXGvSLd.decimals.call({from: accounts[5]});

		assert.equal(stringS2iQyvW, "Zadkiel")
		assert.equal(stringdAx9T0t, "ZAD")
		await expect(ZADvXGvSLd.increaseAllowance.call(addressxUUf2kB, uintqAvj7x, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADvXGvSLd = await ZAD.new({from: accounts[1]});
		const uintOvt41O1 = BigInt("81")
		const uintq0PvRi9 = BigInt("56")
		const addressnLwc5CK = "0x0000000000000000000000000000000000000000"
		const uintofROBIi = BigInt("338")
		const addressH03qGgg = accounts[1]
		const stringvW8Ga1r = await ZADvXGvSLd.symbol.call({from: accounts[0]});
		const stringdAx9T0t = await ZADvXGvSLd.symbol.call({from: accounts[2]});
		const uint256qWBnjrb = await ZADvXGvSLd._burn.call(uintOvt41O1, {from: "0x0000000000000000000000000000000000000001"});
		const boolPf5Ur9r = await ZADvXGvSLd.increaseAllowance.call(addressnLwc5CK, uintq0PvRi9, {from: accounts[5]});
		const boolF2utgdn = await ZADvXGvSLd.decreaseAllowance.call(addressH03qGgg, uintofROBIi, {from: accounts[4]});
		const uint8tzTKMxL = await ZADvXGvSLd.decimals.call({from: accounts[5]});

		assert.equal(stringdAx9T0t, "ZAD")
		assert.equal(stringvW8Ga1r, "ZAD")
		await expect(ZADvXGvSLd._burn.call(uintOvt41O1, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADdXo7JT = await ZAD.new({from: "0x0000000000000000000000000000000000000001"});
		const uintJAyx0Ge = BigInt("235")
		const addressvgQs7hy = accounts[1]
		const uintDblZmSN = BigInt("2013")
		const uintrCbUOYy = BigInt("1061")
		const addressSojFaCx = accounts[5]
		const addresse4slB8r = accounts[2]
		const boolqjSNLK = await ZADdXo7JT.increaseAllowance.call(addressvgQs7hy, uintJAyx0Ge, {from: accounts[4]});
		const uint256Ec1MwQX = await ZADdXo7JT.totalSupply.call({from: accounts[4]});
		const uint256qTT93cj = await ZADdXo7JT._burn.call(uintDblZmSN, {from: "0x0000000000000000000000000000000000000001"});
		const boolcNHxHt = await ZADdXo7JT.decreaseAllowance.call(addressSojFaCx, uintrCbUOYy, {from: accounts[1]});
		const uint256byMCrCb = await ZADdXo7JT.balanceOf.call(addresse4slB8r, {from: accounts[0]});
	});
})