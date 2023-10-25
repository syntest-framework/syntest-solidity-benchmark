const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contractEKw3OxR = await ERC20.new({from: accounts[4]});
		const addedValuewntA5lU = BigInt("470")
		const spendera12waoW = accounts[4]
		const ownerHuZkqyO = accounts[5]
		const valuerSSgAch = BigInt("407")
		const toZF2FH0s = "0x0000000000000000000000000000000000000001"
		const spenderhKPk2JN = accounts[1]
		const ownerv9wTHq2 = "0x0000000000000000000000000000000000000001"
		const addedValuem8NZn7Q = BigInt("1482")
		const spenderd15qJjN = accounts[5]
		const valuerpOOZEC = BigInt("1693")
		const too55TnK7 = accounts[5]
		const fromSFMrsi = accounts[1]
		const nullNAD3Ek = await contractEKw3OxR.increaseAllowance.call(spendera12waoW, addedValuewntA5lU, {from: "0x0000000000000000000000000000000000000001"});
		const nulldluo9xx = await contractEKw3OxR.balanceOf.call(ownerHuZkqyO, {from: accounts[0]});
		const nullZLPHN3L = await contractEKw3OxR.transfer.call(toZF2FH0s, valuerSSgAch, {from: accounts[2]});
		const nullpO167DM = await contractEKw3OxR.allowance.call(ownerv9wTHq2, spenderhKPk2JN, {from: accounts[4]});
		const nullY44rydq = await contractEKw3OxR.increaseAllowance.call(spenderd15qJjN, addedValuem8NZn7Q, {from: accounts[0]});
		const nullamZi07w = await contractEKw3OxR.transferFrom.call(fromSFMrsi, too55TnK7, valuerpOOZEC, {from: accounts[0]});

		assert.equal(nullNAD3Ek, true)
		assert.equal(nulldluo9xx, 0)
		await expect(contractEKw3OxR.transfer.call(toZF2FH0s, valuerSSgAch, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractK2YWcMo = await ERC20.new({from: accounts[0]});
		const valueDLgrhtW = BigInt("1033")
		const spenderRyU1gdW = accounts[0]
		const addedValuelwanLRn = BigInt("651")
		const spenderBL1HadG = "0x0000000000000000000000000000000000000001"
		const addedValue13Qr2g = BigInt("841")
		const spenderNcdTkd5 = accounts[5]
		const nullcqWA0S3 = await contractK2YWcMo.approve.call(spenderRyU1gdW, valueDLgrhtW, {from: accounts[2]});
		const nullAx5mkGL = await contractK2YWcMo.increaseAllowance.call(spenderBL1HadG, addedValuelwanLRn, {from: accounts[5]});
		const nullUytqJug = await contractK2YWcMo.increaseAllowance.call(spenderNcdTkd5, addedValue13Qr2g, {from: accounts[5]});

		assert.equal(nullAx5mkGL, true)
		assert.equal(nullUytqJug, true)
		assert.equal(nullcqWA0S3, true)
	});

	it('test for ERC20', async () => {
		const contractwcuFjCh = await ERC20.new({from: accounts[4]});
		const valueR6sQWlv = BigInt("1314")
		const spenderhmxmYPA = accounts[1]
		const spenderzN0y3OP = accounts[4]
		const ownerNmDrfTy = accounts[0]
		const nullrSSuXgQ = await contractwcuFjCh.approve.call(spenderhmxmYPA, valueR6sQWlv, {from: accounts[4]});
		const nullat8kh8G = await contractwcuFjCh.allowance.call(ownerNmDrfTy, spenderzN0y3OP, {from: accounts[2]});

		assert.equal(nullat8kh8G, 0)
		assert.equal(nullrSSuXgQ, true)
	});

	it('test for ERC20', async () => {
		const contractpNouBEF = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const valueUIAIoym = BigInt("1482")
		const spenderAFgXOgT = accounts[2]
		const subtractedValueqGv85B = BigInt("2017")
		const spendereVUqgkB = accounts[2]
		const valuejSPYHDw = BigInt("479")
		const spenderZ2NINuI = accounts[3]
		const valueWzODp1Z = BigInt("1964")
		const spenderxZoedhy = accounts[2]
		const spenderbf3KY9z = accounts[3]
		const ownerfMNGJx = "0x0000000000000000000000000000000000000001"
		const nullwBlbdSc = await contractpNouBEF.approve.call(spenderAFgXOgT, valueUIAIoym, {from: accounts[1]});
		const nulllR2qdw = await contractpNouBEF.decreaseAllowance.call(spendereVUqgkB, subtractedValueqGv85B, {from: "0x0000000000000000000000000000000000000001"});
		const nulloVzuHAW = await contractpNouBEF.approve.call(spenderZ2NINuI, valuejSPYHDw, {from: accounts[1]});
		const nullm7d8JP = await contractpNouBEF.approve.call(spenderxZoedhy, valueWzODp1Z, {from: accounts[4]});
		const nulln1HdFqv = await contractpNouBEF.totalSupply.call({from: accounts[3]});
		const nullvZ55Ybp = await contractpNouBEF.allowance.call(ownerfMNGJx, spenderbf3KY9z, {from: accounts[2]});
	});

	it('test for ERC20', async () => {
		const contractE7GTWqr = await ERC20.new({from: accounts[3]});
		const valuerKiydPb = BigInt("3")
		const toDtDT0Fw = accounts[1]
		const fromFAjXBC = accounts[1]
		const valueFiNkEz7 = BigInt("1317")
		const spenderoTDZRxw = accounts[3]
		const valueE2mMwXA = BigInt("580")
		const spender63Fkxa = accounts[1]
		const spenderMnpRea = accounts[3]
		const ownerBYtyWJV = "0x0000000000000000000000000000000000000001"
		const subtractedValueWCfaNU = BigInt("1530")
		const spenderLO2vI1j = accounts[3]
		const nullUrY3a4C = await contractE7GTWqr.transferFrom.call(fromFAjXBC, toDtDT0Fw, valuerKiydPb, {from: accounts[3]});
		const nullhDKY9P8 = await contractE7GTWqr.approve.call(spenderoTDZRxw, valueFiNkEz7, {from: "0x0000000000000000000000000000000000000001"});
		const nullOXhX0mn = await contractE7GTWqr.approve.call(spender63Fkxa, valueE2mMwXA, {from: accounts[4]});
		const nullCOowyWT = await contractE7GTWqr.allowance.call(ownerBYtyWJV, spenderMnpRea, {from: accounts[4]});
		const nullUNRLFTZ = await contractE7GTWqr.decreaseAllowance.call(spenderLO2vI1j, subtractedValueWCfaNU, {from: accounts[0]});

		await expect(contractE7GTWqr.transferFrom.call(fromFAjXBC, toDtDT0Fw, valuerKiydPb, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractMaiUyF8 = await ERC20.new({from: accounts[2]});
		const subtractedValuejuIWx9f = BigInt("69")
		const spenderHnO4GCu = accounts[0]
		const ownerB1c9Mxs = accounts[4]
		const addedValuevhPwziu = BigInt("612")
		const spender2Lv98A = accounts[2]
		const nullDdfos2z = await contractMaiUyF8.decreaseAllowance.call(spenderHnO4GCu, subtractedValuejuIWx9f, {from: accounts[0]});
		const nullzhcdLv3 = await contractMaiUyF8.balanceOf.call(ownerB1c9Mxs, {from: accounts[5]});
		const nulllj7IGTp = await contractMaiUyF8.increaseAllowance.call(spender2Lv98A, addedValuevhPwziu, {from: accounts[3]});

		await expect(contractMaiUyF8.decreaseAllowance.call(spenderHnO4GCu, subtractedValuejuIWx9f, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractHgMbKqF = await ERC20.new({from: accounts[2]});
		const spenderc5DCqep = accounts[2]
		const ownerQCKlvvT = accounts[1]
		const valuem7HDWQN = BigInt("1444")
		const spenderUEKZxkK = accounts[4]
		const spenderCzJiel = accounts[4]
		const ownerA54jqFz = accounts[5]
		const nullyiSmGo7 = await contractHgMbKqF.allowance.call(ownerQCKlvvT, spenderc5DCqep, {from: accounts[0]});
		const nullTwfeTaA = await contractHgMbKqF.approve.call(spenderUEKZxkK, valuem7HDWQN, {from: "0x0000000000000000000000000000000000000001"});
		const nullm9uUG6o = await contractHgMbKqF.allowance.call(ownerA54jqFz, spenderCzJiel, {from: accounts[2]});
		const nullqwdasfX = await contractHgMbKqF.totalSupply.call({from: accounts[0]});

		assert.equal(nullTwfeTaA, true)
		assert.equal(nullm9uUG6o, 0)
		assert.equal(nullqwdasfX, 0)
		assert.equal(nullyiSmGo7, 0)
	});
})