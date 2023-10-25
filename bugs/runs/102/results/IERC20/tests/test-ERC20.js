const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contractCt71RE = await ERC20.new({from: accounts[4]});
		const valueEWPH5Vz = BigInt("144")
		const spenderAP9J44M = accounts[2]
		const values45XmnH = BigInt("499")
		const spenderwmFTKq = accounts[0]
		const nulltpncyNE = await contractCt71RE.totalSupply.call({from: accounts[4]});
		const nullt6gLhbP = await contractCt71RE.approve.call(spenderAP9J44M, valueEWPH5Vz, {from: accounts[5]});
		const nullr1sXaG = await contractCt71RE.totalSupply.call({from: accounts[2]});
		const nullV6PfWW7 = await contractCt71RE.approve.call(spenderwmFTKq, values45XmnH, {from: accounts[0]});

		assert.equal(nullV6PfWW7, true)
		assert.equal(nullr1sXaG, 0)
		assert.equal(nullt6gLhbP, true)
		assert.equal(nulltpncyNE, 0)
	});

	it('test for ERC20', async () => {
		const contractgLJeNR2 = await ERC20.new({from: accounts[4]});
		const valueWFAH2rG = BigInt("233")
		const spendere1BX2oq = accounts[5]
		const addedValueKxZ6lXR = BigInt("464")
		const spenderFTUwGz4 = accounts[1]
		const valueRBCOjYl = BigInt("1380")
		const toNaWp3iZ = accounts[0]
		const fromENCbe3F = accounts[0]
		const ownerh4tu5cO = accounts[4]
		const valueV0FPcXX = BigInt("1964")
		const spenderbdUcqi = accounts[1]
		const nullDztl3S0 = await contractgLJeNR2.approve.call(spendere1BX2oq, valueWFAH2rG, {from: accounts[1]});
		const nullqfB4GvT = await contractgLJeNR2.increaseAllowance.call(spenderFTUwGz4, addedValueKxZ6lXR, {from: accounts[3]});
		const nullKipxpn0 = await contractgLJeNR2.totalSupply.call({from: accounts[0]});
		const nullzwhSuvU = await contractgLJeNR2.transferFrom.call(fromENCbe3F, toNaWp3iZ, valueRBCOjYl, {from: accounts[0]});
		const nullkEMX2RP = await contractgLJeNR2.balanceOf.call(ownerh4tu5cO, {from: accounts[4]});
		const nulletZOaA5 = await contractgLJeNR2.approve.call(spenderbdUcqi, valueV0FPcXX, {from: accounts[1]});

		assert.equal(nullDztl3S0, true)
		assert.equal(nullKipxpn0, 0)
		assert.equal(nullqfB4GvT, true)
		await expect(contractgLJeNR2.transferFrom.call(fromENCbe3F, toNaWp3iZ, valueRBCOjYl, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractgKr4rGU = await ERC20.new({from: accounts[1]});
		const subtractedValuezwwP7v = BigInt("685")
		const spenderqWmPJK5 = accounts[4]
		const spenderxxquENs = accounts[2]
		const ownerwpluwcz = accounts[1]
		const addedValueU45zEZa = BigInt("54")
		const spenderslgfyXI = accounts[0]
		const valuen1Xbtrg = BigInt("830")
		const spenderKBn2ZeI = accounts[4]
		const nullXwz0rG = await contractgKr4rGU.decreaseAllowance.call(spenderqWmPJK5, subtractedValuezwwP7v, {from: accounts[1]});
		const nullcJ8t1I2 = await contractgKr4rGU.allowance.call(ownerwpluwcz, spenderxxquENs, {from: accounts[4]});
		const null01CB7T = await contractgKr4rGU.increaseAllowance.call(spenderslgfyXI, addedValueU45zEZa, {from: accounts[2]});
		const nullBKZTXBc = await contractgKr4rGU.approve.call(spenderKBn2ZeI, valuen1Xbtrg, {from: accounts[0]});

		await expect(contractgKr4rGU.decreaseAllowance.call(spenderqWmPJK5, subtractedValuezwwP7v, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractdMyvLe = await ERC20.new({from: accounts[4]});
		const addedValuey24845H = BigInt("167")
		const spendertGMK7kl = accounts[3]
		const valueGITr66Z = BigInt("1941")
		const spenderISIEKZA = accounts[2]
		const addedValuepIADOzD = BigInt("383")
		const spenderrsWeFQU = accounts[1]
		const value25cJAe = BigInt("839")
		const toQluIaOO = accounts[3]
		const nullLWDYpU3 = await contractdMyvLe.increaseAllowance.call(spendertGMK7kl, addedValuey24845H, {from: accounts[4]});
		const nullTkOTm5n = await contractdMyvLe.approve.call(spenderISIEKZA, valueGITr66Z, {from: accounts[4]});
		const nullyBPkFBq = await contractdMyvLe.increaseAllowance.call(spenderrsWeFQU, addedValuepIADOzD, {from: accounts[5]});
		const nullSBlPfjr = await contractdMyvLe.transfer.call(toQluIaOO, value25cJAe, {from: accounts[3]});

		assert.equal(nullLWDYpU3, true)
		assert.equal(nullTkOTm5n, true)
		assert.equal(nullyBPkFBq, true)
		await expect(contractdMyvLe.transfer.call(toQluIaOO, value25cJAe, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractV7BtTBO = await ERC20.new({from: accounts[2]});
		const valueRAUffSV = BigInt("320")
		const spenderIty9pE = accounts[2]
		const spendery0QMSQ6 = accounts[3]
		const ownerkQzDoXx = accounts[5]
		const nullt3SrzlR = await contractV7BtTBO.approve.call(spenderIty9pE, valueRAUffSV, {from: accounts[1]});
		const nullPiuptCO = await contractV7BtTBO.allowance.call(ownerkQzDoXx, spendery0QMSQ6, {from: accounts[1]});

		assert.equal(nullPiuptCO, 0)
		assert.equal(nullt3SrzlR, true)
	});

	it('test for ERC20', async () => {
		const contractKmVMdIy = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const addedValueKO9gjl1 = BigInt("1074")
		const spenderKsDz4sS = accounts[4]
		const valueNy3aMGP = BigInt("1668")
		const spendermG4FQ0y = accounts[2]
		const nullbmWm1o2 = await contractKmVMdIy.increaseAllowance.call(spenderKsDz4sS, addedValueKO9gjl1, {from: accounts[5]});
		const nullm9DFzm = await contractKmVMdIy.approve.call(spendermG4FQ0y, valueNy3aMGP, {from: accounts[4]});
	});

	it('test for ERC20', async () => {
		const contractC7sSkd = await ERC20.new({from: accounts[2]});
		const valuea3YlSpd = BigInt("320")
		const spenderqqDsYoY = accounts[2]
		const ownerTsGi06W = accounts[3]
		const valuew2HMl6 = BigInt("1616")
		const tovZuH6D = accounts[3]
		const spenderzsLHgWX = accounts[3]
		const ownera9kQ4AL = accounts[5]
		const nullY55Iwdu = await contractC7sSkd.approve.call(spenderqqDsYoY, valuea3YlSpd, {from: accounts[1]});
		const null322SGQ = await contractC7sSkd.balanceOf.call(ownerTsGi06W, {from: accounts[0]});
		const nullRn9qj5B = await contractC7sSkd.transfer.call(tovZuH6D, valuew2HMl6, {from: accounts[3]});
		const nullX31y0T9 = await contractC7sSkd.allowance.call(ownera9kQ4AL, spenderzsLHgWX, {from: accounts[1]});

		assert.equal(null322SGQ, 0)
		assert.equal(nullY55Iwdu, true)
		await expect(contractC7sSkd.transfer.call(tovZuH6D, valuew2HMl6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})