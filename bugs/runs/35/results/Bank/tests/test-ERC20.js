const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contractMqbM87G = await ERC20.new({from: accounts[4]});
		const ownerbRUwRb1 = accounts[2]
		const valueuT6w2vm = BigInt("551")
		const spendersbEMuP3 = accounts[1]
		const addedValueF8uBlDk = BigInt("1735")
		const spenderlDiB2E = accounts[5]
		const spenderExTMy6 = accounts[2]
		const ownerPToeXVn = accounts[2]
		const valueO3702rU = BigInt("746")
		const toLDT2XfH = accounts[4]
		const fromcJtMdRG = "0x0000000000000000000000000000000000000001"
		const valueXNwb4ir = BigInt("444")
		const spenderFJVtADb = accounts[3]
		const nullehPZt0 = await contractMqbM87G.balanceOf.call(ownerbRUwRb1, {from: "0x0000000000000000000000000000000000000001"});
		const nullqfmKhQn = await contractMqbM87G.approve.call(spendersbEMuP3, valueuT6w2vm, {from: accounts[4]});
		const nullDC2R6i = await contractMqbM87G.increaseAllowance.call(spenderlDiB2E, addedValueF8uBlDk, {from: accounts[3]});
		const nulliBvb1mT = await contractMqbM87G.allowance.call(ownerPToeXVn, spenderExTMy6, {from: accounts[1]});
		const nullFccV5N1 = await contractMqbM87G.transferFrom.call(fromcJtMdRG, toLDT2XfH, valueO3702rU, {from: accounts[1]});
		const nullf4hGJtu = await contractMqbM87G.approve.call(spenderFJVtADb, valueXNwb4ir, {from: accounts[1]});

		assert.equal(nullDC2R6i, true)
		assert.equal(nullehPZt0, 0)
		assert.equal(nulliBvb1mT, 0)
		assert.equal(nullqfmKhQn, true)
		await expect(contractMqbM87G.transferFrom.call(fromcJtMdRG, toLDT2XfH, valueO3702rU, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractTF9TEUk = await ERC20.new({from: accounts[4]});
		const spenderCX7misX = accounts[2]
		const owneroNXtDco = accounts[0]
		const spenderFbteINo = accounts[3]
		const ownergDdDxV4 = accounts[0]
		const null01FcOJ = await contractTF9TEUk.totalSupply.call({from: accounts[2]});
		const nullOrezE3X = await contractTF9TEUk.allowance.call(owneroNXtDco, spenderCX7misX, {from: accounts[4]});
		const nullXghxeU1 = await contractTF9TEUk.allowance.call(ownergDdDxV4, spenderFbteINo, {from: accounts[5]});

		assert.equal(null01FcOJ, 0)
		assert.equal(nullOrezE3X, 0)
		assert.equal(nullXghxeU1, 0)
	});

	it('test for ERC20', async () => {
		const contractwvFiCFm = await ERC20.new({from: accounts[3]});
		const valueNSrDHyi = BigInt("1056")
		const tooNFDpL = accounts[4]
		const ownerVH28G6V = accounts[4]
		const valuejaS7R2X = BigInt("662")
		const todpDoRB = accounts[0]
		const valueAz3UpyR = BigInt("1341")
		const spenderjJwnckk = accounts[5]
		const nullXBkRXq = await contractwvFiCFm.transfer.call(tooNFDpL, valueNSrDHyi, {from: accounts[3]});
		const nullhJ341VW = await contractwvFiCFm.balanceOf.call(ownerVH28G6V, {from: accounts[4]});
		const nulldwnpisX = await contractwvFiCFm.transfer.call(todpDoRB, valuejaS7R2X, {from: accounts[4]});
		const nullkGz7QMM = await contractwvFiCFm.approve.call(spenderjJwnckk, valueAz3UpyR, {from: accounts[3]});

		await expect(contractwvFiCFm.transfer.call(tooNFDpL, valueNSrDHyi, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractADbYq91 = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const subtractedValuegJq6oLg = BigInt("365")
		const spendern9hSW9u = accounts[4]
		const valuesDgm6UP = BigInt("1545")
		const tofxA7De6 = accounts[1]
		const valueS1onSlF = BigInt("1976")
		const toEdvL79l = accounts[3]
		const nullPim5rlf = await contractADbYq91.decreaseAllowance.call(spendern9hSW9u, subtractedValuegJq6oLg, {from: accounts[0]});
		const nulll0C1pMi = await contractADbYq91.transfer.call(tofxA7De6, valuesDgm6UP, {from: accounts[2]});
		const nullwXVEdM = await contractADbYq91.totalSupply.call({from: accounts[3]});
		const nullDkQBieB = await contractADbYq91.transfer.call(toEdvL79l, valueS1onSlF, {from: accounts[0]});
	});

	it('test for ERC20', async () => {
		const contractPDuQTGu = await ERC20.new({from: accounts[4]});
		const subtractedValueo6bBGOD = BigInt("1028")
		const spenderWklMJCP = accounts[5]
		const nullTlbEMAr = await contractPDuQTGu.totalSupply.call({from: accounts[2]});
		const nulln5PE8OW = await contractPDuQTGu.decreaseAllowance.call(spenderWklMJCP, subtractedValueo6bBGOD, {from: accounts[3]});

		assert.equal(nullTlbEMAr, 0)
		await expect(contractPDuQTGu.decreaseAllowance.call(spenderWklMJCP, subtractedValueo6bBGOD, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})