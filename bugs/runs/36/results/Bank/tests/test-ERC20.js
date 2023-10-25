const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contractQUSvrhU = await ERC20.new({from: accounts[5]});
		const valueivQVE2 = BigInt("314")
		const toqYnhx46 = accounts[4]
		const fromf1CudSW = accounts[3]
		const spendervbQ1sCb = accounts[2]
		const ownerl4Ohc7 = accounts[0]
		const valuekDzOv9 = BigInt("784")
		const spenderTynQ8YT = "0x0000000000000000000000000000000000000001"
		const nulliJGjs5f = await contractQUSvrhU.transferFrom.call(fromf1CudSW, toqYnhx46, valueivQVE2, {from: accounts[3]});
		const nullv3Qn1WG = await contractQUSvrhU.allowance.call(ownerl4Ohc7, spendervbQ1sCb, {from: accounts[4]});
		const nullZTZKSNt = await contractQUSvrhU.approve.call(spenderTynQ8YT, valuekDzOv9, {from: accounts[5]});

		await expect(contractQUSvrhU.transferFrom.call(fromf1CudSW, toqYnhx46, valueivQVE2, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractDJ2WYy8 = await ERC20.new({from: accounts[3]});
		const spenderikdlkaH = accounts[3]
		const owneryyl4MGc = "0x0000000000000000000000000000000000000001"
		const addedValuefok3nho = BigInt("101")
		const spenderTLFNGtu = accounts[0]
		const nullqhtxvWJ = await contractDJ2WYy8.allowance.call(owneryyl4MGc, spenderikdlkaH, {from: accounts[2]});
		const nullaJCX5W1 = await contractDJ2WYy8.increaseAllowance.call(spenderTLFNGtu, addedValuefok3nho, {from: accounts[0]});

		assert.equal(nullaJCX5W1, true)
		assert.equal(nullqhtxvWJ, 0)
	});

	it('test for ERC20', async () => {
		const contractls4I7R1 = await ERC20.new({from: accounts[2]});
		const value9JgyXA = BigInt("944")
		const toJFZRWs = accounts[0]
		const valuebqPcj5t = BigInt("1858")
		const toBAIAUVN = accounts[0]
		const fromHBr3JM = accounts[1]
		const nullCcWbhhW = await contractls4I7R1.transfer.call(toJFZRWs, value9JgyXA, {from: accounts[5]});
		const nullOvspjd3 = await contractls4I7R1.totalSupply.call({from: accounts[1]});
		const nullU9acU8t = await contractls4I7R1.transferFrom.call(fromHBr3JM, toBAIAUVN, valuebqPcj5t, {from: accounts[0]});

		await expect(contractls4I7R1.transfer.call(toJFZRWs, value9JgyXA, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractgxeN6mF = await ERC20.new({from: accounts[1]});
		const subtractedValuetUa0CY5 = BigInt("818")
		const spenderlnvoX05 = accounts[5]
		const addedValueCUxGOb = BigInt("182")
		const spenderrefSfxH = accounts[2]
		const nulllNW6vdf = await contractgxeN6mF.decreaseAllowance.call(spenderlnvoX05, subtractedValuetUa0CY5, {from: accounts[3]});
		const nullrIwkmna = await contractgxeN6mF.increaseAllowance.call(spenderrefSfxH, addedValueCUxGOb, {from: accounts[4]});

		await expect(contractgxeN6mF.decreaseAllowance.call(spenderlnvoX05, subtractedValuetUa0CY5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractWmBnFxb = await ERC20.new({from: accounts[2]});
		const spenderHBG5N2l = accounts[3]
		const ownerhkp6MJT = accounts[4]
		const subtractedValueaTi6my5 = BigInt("311")
		const spendereQWxrH = accounts[4]
		const valuet17Ycqh = BigInt("370")
		const tognCrGq = accounts[3]
		const fromf6SitiS = accounts[0]
		const nullgjfN1n = await contractWmBnFxb.allowance.call(ownerhkp6MJT, spenderHBG5N2l, {from: "0x0000000000000000000000000000000000000001"});
		const nullzn14SRg = await contractWmBnFxb.totalSupply.call({from: accounts[2]});
		const nullAcMOFqO = await contractWmBnFxb.decreaseAllowance.call(spendereQWxrH, subtractedValueaTi6my5, {from: accounts[5]});
		const nullV6Y9654 = await contractWmBnFxb.transferFrom.call(fromf6SitiS, tognCrGq, valuet17Ycqh, {from: accounts[2]});

		assert.equal(nullgjfN1n, 0)
		assert.equal(nullzn14SRg, 0)
		await expect(contractWmBnFxb.decreaseAllowance.call(spendereQWxrH, subtractedValueaTi6my5, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contracteUDUltu = await ERC20.new({from: accounts[2]});
		const addedValueeF0Ft9 = BigInt("675")
		const spenderj7RK9WV = accounts[0]
		const addedValuejkuqf9q = BigInt("594")
		const spendertcYzq4m = accounts[3]
		const valuelqBd1Is = BigInt("679")
		const spenderEI7gM3T = accounts[3]
		const addedValueZZuwkHk = BigInt("1915")
		const spenderbL5ux0d = accounts[3]
		const valuec8oJ1n5 = BigInt("1698")
		const spenderFQFYpAz = "0x0000000000000000000000000000000000000001"
		const nullFy8j6li = await contracteUDUltu.increaseAllowance.call(spenderj7RK9WV, addedValueeF0Ft9, {from: accounts[1]});
		const nullWneqZbl = await contracteUDUltu.increaseAllowance.call(spendertcYzq4m, addedValuejkuqf9q, {from: accounts[3]});
		const nullrrzGrUU = await contracteUDUltu.approve.call(spenderEI7gM3T, valuelqBd1Is, {from: accounts[5]});
		const nullJ1S5whD = await contracteUDUltu.increaseAllowance.call(spenderbL5ux0d, addedValueZZuwkHk, {from: accounts[1]});
		const nullwGZvhK3 = await contracteUDUltu.approve.call(spenderFQFYpAz, valuec8oJ1n5, {from: accounts[4]});

		assert.equal(nullFy8j6li, true)
		assert.equal(nullJ1S5whD, true)
		assert.equal(nullWneqZbl, true)
		assert.equal(nullrrzGrUU, true)
		assert.equal(nullwGZvhK3, true)
	});

	it('test for ERC20', async () => {
		const contractjsXCvDp = await ERC20.new({from: accounts[2]});
		const valuet1njwP = BigInt("1630")
		const spenderV3QRFRF = accounts[2]
		const ownerZu2wWqL = accounts[3]
		const valuetatzGcL = BigInt("1998")
		const spenderZrsa3Xb = accounts[2]
		const nulloUvjYM1 = await contractjsXCvDp.approve.call(spenderV3QRFRF, valuet1njwP, {from: accounts[1]});
		const nulla1GaPHM = await contractjsXCvDp.balanceOf.call(ownerZu2wWqL, {from: accounts[4]});
		const nullhSjb8pK = await contractjsXCvDp.approve.call(spenderZrsa3Xb, valuetatzGcL, {from: accounts[3]});

		assert.equal(nulla1GaPHM, 0)
		assert.equal(nullhSjb8pK, true)
		assert.equal(nulloUvjYM1, true)
	});

	it('test for ERC20', async () => {
		const contractJVP7zgV = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const valuezdSry2K = BigInt("969")
		const tojOzMlc = accounts[3]
		const spenderrP9FprM = accounts[2]
		const ownerf5xRurK = accounts[0]
		const addedValueCXJiGi6 = BigInt("810")
		const spenderBB0qwaK = accounts[4]
		const spenderJdtPOOk = accounts[2]
		const ownerfrquss = "0x0000000000000000000000000000000000000001"
		const valueFUgbNzd = BigInt("1290")
		const spendermaT84D = accounts[1]
		const nullmbDKX1v = await contractJVP7zgV.transfer.call(tojOzMlc, valuezdSry2K, {from: accounts[4]});
		const nulliaJDB5b = await contractJVP7zgV.allowance.call(ownerf5xRurK, spenderrP9FprM, {from: accounts[2]});
		const nullxesewLa = await contractJVP7zgV.increaseAllowance.call(spenderBB0qwaK, addedValueCXJiGi6, {from: accounts[1]});
		const nullZ0PecUm = await contractJVP7zgV.allowance.call(ownerfrquss, spenderJdtPOOk, {from: accounts[3]});
		const nullGrjYzdX = await contractJVP7zgV.approve.call(spendermaT84D, valueFUgbNzd, {from: accounts[2]});
	});
})