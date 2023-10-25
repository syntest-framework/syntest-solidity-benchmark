const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contractb4ZelgN = await ERC20.new({from: accounts[5]});
		const valuedHwilBE = BigInt("1326")
		const toN5usMVO = accounts[4]
		const owner0AtHra = accounts[1]
		const valueWLBWfpm = BigInt("1222")
		const spenderxQdMyqY = "0x0000000000000000000000000000000000000001"
		const addedValuecHYguqY = BigInt("585")
		const spenderLfP1UVG = accounts[0]
		const nullq4mDJvt = await contractb4ZelgN.transfer.call(toN5usMVO, valuedHwilBE, {from: accounts[5]});
		const nullWOkmBqJ = await contractb4ZelgN.balanceOf.call(owner0AtHra, {from: accounts[5]});
		const nullAAV4lln = await contractb4ZelgN.approve.call(spenderxQdMyqY, valueWLBWfpm, {from: accounts[4]});
		const nullc9quJ4y = await contractb4ZelgN.increaseAllowance.call(spenderLfP1UVG, addedValuecHYguqY, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractb4ZelgN.transfer.call(toN5usMVO, valuedHwilBE, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractxfSsOPL = await ERC20.new({from: accounts[1]});
		const valueel4QEiA = BigInt("832")
		const spenderkfwdLW = accounts[4]
		const valueXfqhPOU = BigInt("1661")
		const spenderUakavb7 = accounts[2]
		const nullLOHXwVF = await contractxfSsOPL.approve.call(spenderkfwdLW, valueel4QEiA, {from: accounts[4]});
		const nullPMTE37k = await contractxfSsOPL.approve.call(spenderUakavb7, valueXfqhPOU, {from: accounts[3]});

		assert.equal(nullLOHXwVF, true)
		assert.equal(nullPMTE37k, true)
	});

	it('test for ERC20', async () => {
		const contractAriICaj = await ERC20.new({from: accounts[3]});
		const ownerGthnkoa = accounts[2]
		const spenderlCTEr3R = accounts[4]
		const ownernYSlty = accounts[0]
		const valueaVIcvwB = BigInt("232")
		const tokYXwU1 = accounts[3]
		const frombRyFZQE = accounts[4]
		const addedValueGjgzIk6 = BigInt("1033")
		const spenderMcYtLYM = "0x0000000000000000000000000000000000000001"
		const valuez7JRONH = BigInt("613")
		const spenderRDjwLMX = accounts[4]
		const nullImHiwQ = await contractAriICaj.balanceOf.call(ownerGthnkoa, {from: accounts[5]});
		const nullrUNfzJ1 = await contractAriICaj.allowance.call(ownernYSlty, spenderlCTEr3R, {from: accounts[1]});
		const nulluaSlGWt = await contractAriICaj.transferFrom.call(frombRyFZQE, tokYXwU1, valueaVIcvwB, {from: accounts[3]});
		const nullQAht3ID = await contractAriICaj.increaseAllowance.call(spenderMcYtLYM, addedValueGjgzIk6, {from: accounts[5]});
		const nullrVCXX90 = await contractAriICaj.approve.call(spenderRDjwLMX, valuez7JRONH, {from: accounts[2]});

		assert.equal(nullImHiwQ, 0)
		assert.equal(nullrUNfzJ1, 0)
		await expect(contractAriICaj.transferFrom.call(frombRyFZQE, tokYXwU1, valueaVIcvwB, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractbiXQdqj = await ERC20.new({from: accounts[3]});
		const addedValuez3GP1uX = BigInt("599")
		const spenderuG91Wfk = "0x0000000000000000000000000000000000000001"
		const spenderweoIdjn = accounts[3]
		const ownerQwWON4C = accounts[0]
		const valueoECKDfb = BigInt("1077")
		const toG1oCmRY = accounts[2]
		const fromePosYTH = accounts[2]
		const nullpjYicqt = await contractbiXQdqj.increaseAllowance.call(spenderuG91Wfk, addedValuez3GP1uX, {from: accounts[2]});
		const nullAF4JhBx = await contractbiXQdqj.allowance.call(ownerQwWON4C, spenderweoIdjn, {from: "0x0000000000000000000000000000000000000001"});
		const nullzWKe0C = await contractbiXQdqj.transferFrom.call(fromePosYTH, toG1oCmRY, valueoECKDfb, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullAF4JhBx, 0)
		assert.equal(nullpjYicqt, true)
		await expect(contractbiXQdqj.transferFrom.call(fromePosYTH, toG1oCmRY, valueoECKDfb, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractskZ8TV = await ERC20.new({from: accounts[5]});
		const subtractedValueXfpk5u = BigInt("1954")
		const spenderT2IPR4O = accounts[0]
		const valuegUn0R4W = BigInt("129")
		const tomiKpCH = accounts[2]
		const fromfobocVn = accounts[1]
		const valueFMXN2Q = BigInt("665")
		const spenderuL8Hmbc = accounts[1]
		const nullkd4DcFS = await contractskZ8TV.decreaseAllowance.call(spenderT2IPR4O, subtractedValueXfpk5u, {from: accounts[2]});
		const nullfJMYy10 = await contractskZ8TV.transferFrom.call(fromfobocVn, tomiKpCH, valuegUn0R4W, {from: accounts[1]});
		const nullstqOQtB = await contractskZ8TV.approve.call(spenderuL8Hmbc, valueFMXN2Q, {from: accounts[3]});

		await expect(contractskZ8TV.decreaseAllowance.call(spenderT2IPR4O, subtractedValueXfpk5u, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractrLJ9Qrx = await ERC20.new({from: accounts[3]});
		const addedValuen0HHI9 = BigInt("599")
		const spenderHp3E9wZ = "0x0000000000000000000000000000000000000001"
		const ownerMyz8Pqc = accounts[5]
		const ownerIAoKOPU = accounts[2]
		const spenderMVYoFBP = accounts[0]
		const ownerH5AxV4B = accounts[3]
		const valuehk4Ejhp = BigInt("1077")
		const toRt8s5oG = accounts[2]
		const fromEXsCwp6 = accounts[2]
		const nullmNrFWy5 = await contractrLJ9Qrx.increaseAllowance.call(spenderHp3E9wZ, addedValuen0HHI9, {from: accounts[2]});
		const nullW760Fgy = await contractrLJ9Qrx.totalSupply.call({from: accounts[0]});
		const nullVMBRNU = await contractrLJ9Qrx.balanceOf.call(ownerMyz8Pqc, {from: accounts[4]});
		const nullOJf3xsX = await contractrLJ9Qrx.balanceOf.call(ownerIAoKOPU, {from: accounts[0]});
		const nullo5hJzqj = await contractrLJ9Qrx.allowance.call(ownerH5AxV4B, spenderMVYoFBP, {from: accounts[1]});
		const nullk8ehY65 = await contractrLJ9Qrx.transferFrom.call(fromEXsCwp6, toRt8s5oG, valuehk4Ejhp, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(nullOJf3xsX, 0)
		assert.equal(nullVMBRNU, 0)
		assert.equal(nullW760Fgy, 0)
		assert.equal(nullmNrFWy5, true)
		assert.equal(nullo5hJzqj, 0)
		await expect(contractrLJ9Qrx.transferFrom.call(fromEXsCwp6, toRt8s5oG, valuehk4Ejhp, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractw0rQAVF = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const ownerrWFOBsL = "0x0000000000000000000000000000000000000001"
		const valueVObimQE = BigInt("1785")
		const spenderx3jrNed = accounts[3]
		const addedValueGh2tNxZ = BigInt("1070")
		const spenderuGNdPBX = accounts[2]
		const nullZELMkDW = await contractw0rQAVF.balanceOf.call(ownerrWFOBsL, {from: accounts[3]});
		const nullHVdC0eP = await contractw0rQAVF.approve.call(spenderx3jrNed, valueVObimQE, {from: accounts[0]});
		const nullei4YREW = await contractw0rQAVF.increaseAllowance.call(spenderuGNdPBX, addedValueGh2tNxZ, {from: accounts[4]});
		const nullXbtAA80 = await contractw0rQAVF.totalSupply.call({from: accounts[2]});
	});
})