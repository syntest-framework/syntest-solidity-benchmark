const FrogDAO = artifacts.require("FrogDAO");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAO', (accounts) => {
	it('test for FrogDAO', async () => {
		const FrogDAODHrmjGM = await FrogDAO.new({from: accounts[4]});
		const uintyCfiDOP = BigInt("1674")
		const addresseldAybj = "0x0000000000000000000000000000000000000001"
		const addressOqZkPEs = accounts[5]
		const uinty4ZcLpa = BigInt("563")
		const addressSb3TqG1 = accounts[3]
		const uintTRNbVQn = BigInt("1122")
		const addressKBnzxw6 = accounts[3]
		const uinttDS3hU9 = BigInt("1473")
		const addressRq9cOHL = accounts[1]
		const booly8DkVG5 = await FrogDAODHrmjGM.transfer.call(addresseldAybj, uintyCfiDOP, {from: accounts[2]});
		const uinty7WN1AB = await FrogDAODHrmjGM.balanceOf.call(addressOqZkPEs, {from: accounts[1]});
		const boolYLiTHB4 = await FrogDAODHrmjGM.approve.call(addressSb3TqG1, uinty4ZcLpa, {from: accounts[3]});
		const boolQWyIxHB = await FrogDAODHrmjGM.approve.call(addressKBnzxw6, uintTRNbVQn, {from: accounts[5]});
		const boolsqySfxU = await FrogDAODHrmjGM.approve.call(addressRq9cOHL, uinttDS3hU9, {from: accounts[4]});

		await expect(FrogDAODHrmjGM.transfer.call(addresseldAybj, uintyCfiDOP, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOz4CKizq = await FrogDAO.new({from: accounts[3]});
		const addressZpL3hM = accounts[2]
		const addressPsX3zYz = accounts[2]
		const uintc6wXY8P = BigInt("622")
		const uintQ1A9CG = BigInt("243")
		const uintAX0HaW = BigInt("472")
		const addressJbWde6j = accounts[4]
		const uintyCtpwik = await FrogDAOz4CKizq.totalSupply.call({from: accounts[1]});
		const uintUFkG3xM = await FrogDAOz4CKizq.allowance.call(addressPsX3zYz, addressZpL3hM, {from: "0x0000000000000000000000000000000000000001"});
		const uintWoJLwz = await FrogDAOz4CKizq.safeDiv.call(uintQ1A9CG, uintc6wXY8P, {from: "0x0000000000000000000000000000000000000001"});
		const booldtD8CN = await FrogDAOz4CKizq.approve.call(addressJbWde6j, uintAX0HaW, {from: accounts[2]});

		assert.equal(booldtD8CN, true)
		assert.equal(uintUFkG3xM, BigInt("0"))
		assert.equal(uintWoJLwz, BigInt("0"))
		assert.equal(uintyCtpwik, BigInt("1000000000000000000000000"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAOtYlnqiG = await FrogDAO.new({from: accounts[1]});
		const addresscHfu0ka = accounts[1]
		const uintYd24yP = BigInt("64")
		const addressPrN9cDa = accounts[1]
		const uintV1HuT7q = BigInt("667")
		const addresswH58G5R = accounts[3]
		const uintP02D6nn = BigInt("1069")
		const uintcmawHF = BigInt("1163")
		const uintuvjWeR = BigInt("344")
		const addressWjLTtDJ = accounts[0]
		const uintxlB7cau = await FrogDAOtYlnqiG.balanceOf.call(addresscHfu0ka, {from: accounts[3]});
		const boolxNbxqTu = await FrogDAOtYlnqiG.transfer.call(addressPrN9cDa, uintYd24yP, {from: accounts[5]});
		const booldhjbCuu = await FrogDAOtYlnqiG.transfer.call(addresswH58G5R, uintV1HuT7q, {from: "0x0000000000000000000000000000000000000001"});
		const uintCI0GpJL = await FrogDAOtYlnqiG.safeMul.call(uintcmawHF, uintP02D6nn, {from: accounts[3]});
		const bool5oOBcJ = await FrogDAOtYlnqiG.approve.call(addressWjLTtDJ, uintuvjWeR, {from: accounts[0]});

		assert.equal(uintxlB7cau, BigInt("1000000000000000000000000"))
		await expect(FrogDAOtYlnqiG.transfer.call(addressPrN9cDa, uintYd24yP, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOuMOkXE = await FrogDAO.new({from: accounts[2]});
		const addressclt4n3Q = accounts[4]
		const address1MISzJ = accounts[3]
		const uintFosOrHM = BigInt("1064")
		const addressp8AAfkn = accounts[0]
		const uinteHZiy1F = await FrogDAOuMOkXE.allowance.call(address1MISzJ, addressclt4n3Q, {from: accounts[4]});
		const boolOVjazd6 = await FrogDAOuMOkXE.transfer.call(addressp8AAfkn, uintFosOrHM, {from: accounts[2]});
		const uintYN0NeOh = await FrogDAOuMOkXE.totalSupply.call({from: accounts[3]});
		const uintglUnFTp = await FrogDAOuMOkXE.totalSupply.call({from: accounts[4]});

		assert.equal(boolOVjazd6, true)
		assert.equal(uintYN0NeOh, BigInt("1000000000000000000000000"))
		assert.equal(uinteHZiy1F, BigInt("0"))
		assert.equal(uintglUnFTp, BigInt("1000000000000000000000000"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAOex1UrEX = await FrogDAO.new({from: accounts[4]});
		const uintbwQFC54 = BigInt("1881")
		const addressEI7DhVp = accounts[3]
		const addressIuZZiLM = "0x0000000000000000000000000000000000000001"
		const uintL4YMm9 = BigInt("77")
		const uintqsS3xFW = BigInt("1910")
		const uintemEUShz = BigInt("1620")
		const uintcm2nlJp = BigInt("541")
		const uintpqUOPxe = BigInt("509")
		const uintTTSXefT = BigInt("809")
		const booldJmqzsG = await FrogDAOex1UrEX.transferFrom.call(addressIuZZiLM, addressEI7DhVp, uintbwQFC54, {from: accounts[1]});
		const uintSCqcEK3 = await FrogDAOex1UrEX.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint3TzGbA = await FrogDAOex1UrEX.safeDiv.call(uintqsS3xFW, uintL4YMm9, {from: accounts[1]});
		const uintZabXjol = await FrogDAOex1UrEX.safeDiv.call(uintcm2nlJp, uintemEUShz, {from: accounts[5]});
		const uintBEx6Gyr = await FrogDAOex1UrEX.safeDiv.call(uintTTSXefT, uintpqUOPxe, {from: accounts[1]});

		await expect(FrogDAOex1UrEX.transferFrom.call(addressIuZZiLM, addressEI7DhVp, uintbwQFC54, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOcOAgThA = await FrogDAO.new({from: "0x0000000000000000000000000000000000000001"});
		const uintoUX4MtK = BigInt("205")
		const uintwYL3Po = BigInt("476")
		const uintf6e00Z = BigInt("44")
		const addresscJJJzFP = accounts[4]
		const uintOTsmY4G = BigInt("1519")
		const addresshrWWupy = accounts[2]
		const uintHgYslF5 = await FrogDAOcOAgThA.safeMul.call(uintwYL3Po, uintoUX4MtK, {from: accounts[3]});
		const boolu6ehzQ6 = await FrogDAOcOAgThA.transfer.call(addresscJJJzFP, uintf6e00Z, {from: accounts[2]});
		const boolQXrc4iN = await FrogDAOcOAgThA.approve.call(addresshrWWupy, uintOTsmY4G, {from: accounts[1]});
		const uintCsHOezr = await FrogDAOcOAgThA.totalSupply.call({from: accounts[4]});
	});
})