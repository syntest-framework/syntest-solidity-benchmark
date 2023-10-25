const FrogDAO = artifacts.require("FrogDAO");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAO', (accounts) => {
	it('test for FrogDAO', async () => {
		const FrogDAOLodrQM = await FrogDAO.new({from: accounts[4]});
		const uintO6obZg = BigInt("267")
		const addressEEplhdu = accounts[0]
		const uinte8274dj = BigInt("452")
		const uintJ6q0nWX = BigInt("891")
		const uintuqVjOoc = BigInt("40")
		const uintCTAnKRC = BigInt("1372")
		const boolbGQDUeg = await FrogDAOLodrQM.transfer.call(addressEEplhdu, uintO6obZg, {from: accounts[2]});
		const uintZAmgXw0 = await FrogDAOLodrQM.safeMul.call(uintJ6q0nWX, uinte8274dj, {from: accounts[4]});
		const uintJZ9sYiI = await FrogDAOLodrQM.totalSupply.call({from: accounts[3]});
		const uinto6tYlP4 = await FrogDAOLodrQM.safeDiv.call(uintCTAnKRC, uintuqVjOoc, {from: accounts[4]});
		const uintLyg8q4V = await FrogDAOLodrQM.totalSupply.call({from: accounts[4]});
		const uint0U1fuJ = await FrogDAOLodrQM.totalSupply.call({from: accounts[5]});

		await expect(FrogDAOLodrQM.transfer.call(addressEEplhdu, uintO6obZg, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAONHJWMW = await FrogDAO.new({from: accounts[4]});
		const addressIytHhbv = accounts[3]
		const uintJqSYyQN = BigInt("155")
		const addressqg1eVo = accounts[1]
		const addressBfZewz = accounts[4]
		const uintzwBFG94 = await FrogDAONHJWMW.balanceOf.call(addressIytHhbv, {from: accounts[3]});
		const boolqjcM1w = await FrogDAONHJWMW.approve.call(addressqg1eVo, uintJqSYyQN, {from: "0x0000000000000000000000000000000000000001"});
		const uintOqQ2mhM = await FrogDAONHJWMW.balanceOf.call(addressBfZewz, {from: accounts[0]});

		assert.equal(boolqjcM1w, true)
		assert.equal(uintOqQ2mhM, BigInt("1000000000000000000000000"))
		assert.equal(uintzwBFG94, BigInt("0"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAOYY0a2Vk = await FrogDAO.new({from: accounts[5]});
		const uintGL0LBG = BigInt("237")
		const uintG54rWmf = BigInt("1712")
		const addressMAL80h = accounts[0]
		const addressOqPUfR9 = accounts[2]
		const uintx9Qyohl = BigInt("1091")
		const addressBeTLF2A = accounts[2]
		const uintg3Ybwf = await FrogDAOYY0a2Vk.safeAdd.call(uintG54rWmf, uintGL0LBG, {from: accounts[2]});
		const uintE2OI9qC = await FrogDAOYY0a2Vk.allowance.call(addressOqPUfR9, addressMAL80h, {from: "0x0000000000000000000000000000000000000001"});
		const boolOXLwCP4 = await FrogDAOYY0a2Vk.transfer.call(addressBeTLF2A, uintx9Qyohl, {from: accounts[2]});

		assert.equal(uintE2OI9qC, BigInt("0"))
		assert.equal(uintg3Ybwf, BigInt("1949"))
		await expect(FrogDAOYY0a2Vk.transfer.call(addressBeTLF2A, uintx9Qyohl, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOTot1q6C = await FrogDAO.new({from: accounts[1]});
		const addressCy76jrU = accounts[2]
		const addressZ41cSNp = accounts[4]
		const addressY3d7Iax = accounts[0]
		const uinth8fwrMZ = BigInt("1618")
		const addressJIDj0rh = accounts[3]
		const uinteu9O6Fx = BigInt("1684")
		const addressLnwHKuC = accounts[2]
		const uintlTFWrSZ = await FrogDAOTot1q6C.balanceOf.call(addressCy76jrU, {from: accounts[3]});
		const uintzPd732V = await FrogDAOTot1q6C.allowance.call(addressY3d7Iax, addressZ41cSNp, {from: accounts[0]});
		const boolkXLw0qE = await FrogDAOTot1q6C.approve.call(addressJIDj0rh, uinth8fwrMZ, {from: accounts[4]});
		const uintXU1jv4q = await FrogDAOTot1q6C.totalSupply.call({from: accounts[5]});
		const boolZ3vGAF = await FrogDAOTot1q6C.approve.call(addressLnwHKuC, uinteu9O6Fx, {from: accounts[5]});

		assert.equal(boolZ3vGAF, true)
		assert.equal(boolkXLw0qE, true)
		assert.equal(uintXU1jv4q, BigInt("1000000000000000000000000"))
		assert.equal(uintlTFWrSZ, BigInt("0"))
		assert.equal(uintzPd732V, BigInt("0"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAONNjsVSX = await FrogDAO.new({from: "0x0000000000000000000000000000000000000001"});
		const addressGpyhPAu = accounts[0]
		const addressYiFyxZw = accounts[1]
		const uintAF56io = BigInt("2008")
		const uintwO4JvYc = BigInt("2010")
		const uintw965FmK = BigInt("212")
		const uintsO63GhY = BigInt("207")
		const uintLHcCm2o = await FrogDAONNjsVSX.allowance.call(addressYiFyxZw, addressGpyhPAu, {from: accounts[1]});
		const uintC7CQPWN = await FrogDAONNjsVSX.safeSub.call(uintwO4JvYc, uintAF56io, {from: accounts[3]});
		const uintfpeyGCh = await FrogDAONNjsVSX.totalSupply.call({from: accounts[2]});
		const uintGpC5MLZ = await FrogDAONNjsVSX.safeMul.call(uintsO63GhY, uintw965FmK, {from: accounts[3]});
	});

	it('test for FrogDAO', async () => {
		const FrogDAONHJWMW = await FrogDAO.new({from: accounts[4]});
		const uintxILZC8 = BigInt("1477")
		const addressOXwQPtR = accounts[1]
		const addressksoehd = accounts[0]
		const addressa1H1d3I = accounts[3]
		const addressSiR1dGH = accounts[4]
		const boolxRloWuM = await FrogDAONHJWMW.transferFrom.call(addressksoehd, addressOXwQPtR, uintxILZC8, {from: accounts[1]});
		const uintHMclwlm = await FrogDAONHJWMW.totalSupply.call({from: accounts[1]});
		const uintzwBFG94 = await FrogDAONHJWMW.balanceOf.call(addressa1H1d3I, {from: accounts[3]});
		const uintOqQ2mhM = await FrogDAONHJWMW.balanceOf.call(addressSiR1dGH, {from: accounts[0]});

		await expect(FrogDAONHJWMW.transferFrom.call(addressksoehd, addressOXwQPtR, uintxILZC8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})