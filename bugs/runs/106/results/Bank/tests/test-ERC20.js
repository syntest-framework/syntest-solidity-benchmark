const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contract59f1WP = await ERC20.new({from: accounts[0]});
		const ownerqG42yvq = accounts[3]
		const valuer5CpSjR = BigInt("1096")
		const toK1lQzwP = accounts[5]
		const addedValueoobFXbm = BigInt("917")
		const spendertkIQPmk = accounts[1]
		const valuezuEAgWS = BigInt("977")
		const toykbacS = accounts[2]
		const nullyaMYJ5e = await contract59f1WP.balanceOf.call(ownerqG42yvq, {from: accounts[2]});
		const nullPAmbjjD = await contract59f1WP.transfer.call(toK1lQzwP, valuer5CpSjR, {from: accounts[1]});
		const nullOvriZVk = await contract59f1WP.increaseAllowance.call(spendertkIQPmk, addedValueoobFXbm, {from: accounts[3]});
		const nullLQmDOBh = await contract59f1WP.transfer.call(toykbacS, valuezuEAgWS, {from: accounts[0]});

		assert.equal(nullyaMYJ5e, 0)
		await expect(contract59f1WP.transfer.call(toK1lQzwP, valuer5CpSjR, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractshVUkRA = await ERC20.new({from: accounts[2]});
		const valuetTzZlsk = BigInt("1875")
		const spenderGsFfGCA = accounts[0]
		const subtractedValuevcYM06B = BigInt("861")
		const spenderO0RAy8g = accounts[2]
		const spenderzEpYT6 = accounts[4]
		const ownerhJfSBh = accounts[2]
		const ownerCF4sBiR = "0x0000000000000000000000000000000000000001"
		const addedValuek6srewO = BigInt("832")
		const spenderoG2AW98 = accounts[4]
		const nullCXPigYu = await contractshVUkRA.approve.call(spenderGsFfGCA, valuetTzZlsk, {from: accounts[1]});
		const nullarim40X = await contractshVUkRA.decreaseAllowance.call(spenderO0RAy8g, subtractedValuevcYM06B, {from: accounts[4]});
		const nullwFonJhd = await contractshVUkRA.allowance.call(ownerhJfSBh, spenderzEpYT6, {from: accounts[0]});
		const nullbaJgcp = await contractshVUkRA.balanceOf.call(ownerCF4sBiR, {from: accounts[0]});
		const nullNt1nhe7 = await contractshVUkRA.increaseAllowance.call(spenderoG2AW98, addedValuek6srewO, {from: accounts[0]});

		assert.equal(nullCXPigYu, true)
		await expect(contractshVUkRA.decreaseAllowance.call(spenderO0RAy8g, subtractedValuevcYM06B, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractIx0AG5 = await ERC20.new({from: accounts[1]});
		const valuer1xv9B = BigInt("1797")
		const todH3YEmv = accounts[0]
		const fromyurxct = accounts[1]
		const valueZg7NTas = BigInt("826")
		const toN9YUYL0 = accounts[4]
		const from3JKi5z = accounts[4]
		const spenderPgc8jLG = accounts[3]
		const ownerP2UP6L0 = accounts[1]
		const nullw5SqSVK = await contractIx0AG5.transferFrom.call(fromyurxct, todH3YEmv, valuer1xv9B, {from: accounts[4]});
		const nullUG5dYAt = await contractIx0AG5.transferFrom.call(from3JKi5z, toN9YUYL0, valueZg7NTas, {from: "0x0000000000000000000000000000000000000001"});
		const nullppxvFpK = await contractIx0AG5.allowance.call(ownerP2UP6L0, spenderPgc8jLG, {from: accounts[0]});

		await expect(contractIx0AG5.transferFrom.call(fromyurxct, todH3YEmv, valuer1xv9B, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractgtTYxiF = await ERC20.new({from: accounts[4]});
		const addedValueP4UaFSk = BigInt("596")
		const spenderG0t0aSy = accounts[4]
		const valueIoGeMza = BigInt("1042")
		const spenderFRH8w5B = accounts[4]
		const valueUKye21E = BigInt("894")
		const touVwjnT9 = accounts[1]
		const ownercut3AB1 = accounts[1]
		const valuePi3je7j = BigInt("1939")
		const toyH8D1Xz = accounts[2]
		const fromLAFGFK0 = accounts[1]
		const valuedGv9idZ = BigInt("1425")
		const toz12uGg2 = accounts[1]
		const nullYDfALTI = await contractgtTYxiF.increaseAllowance.call(spenderG0t0aSy, addedValueP4UaFSk, {from: accounts[4]});
		const nullWAju4l = await contractgtTYxiF.approve.call(spenderFRH8w5B, valueIoGeMza, {from: accounts[4]});
		const nullEQ2w1Wl = await contractgtTYxiF.transfer.call(touVwjnT9, valueUKye21E, {from: accounts[4]});
		const nullskrOfB6 = await contractgtTYxiF.balanceOf.call(ownercut3AB1, {from: accounts[4]});
		const nulle4Cwko6 = await contractgtTYxiF.transferFrom.call(fromLAFGFK0, toyH8D1Xz, valuePi3je7j, {from: accounts[2]});
		const nullSscZg9 = await contractgtTYxiF.transfer.call(toz12uGg2, valuedGv9idZ, {from: accounts[0]});

		assert.equal(nullWAju4l, true)
		assert.equal(nullYDfALTI, true)
		await expect(contractgtTYxiF.transfer.call(touVwjnT9, valueUKye21E, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractguVUkRp = await ERC20.new({from: accounts[4]});
		const valueqXo4g2G = BigInt("1372")
		const spenderdCq0esh = "0x0000000000000000000000000000000000000001"
		const spenderwrUzqKY = accounts[5]
		const ownerqiJcvt9 = accounts[0]
		const spenderuMK7ufT = accounts[5]
		const ownertMiACxe = accounts[2]
		const nullbMLzE9 = await contractguVUkRp.totalSupply.call({from: accounts[1]});
		const nullMgEXFs = await contractguVUkRp.approve.call(spenderdCq0esh, valueqXo4g2G, {from: accounts[5]});
		const nullqplyvk = await contractguVUkRp.allowance.call(ownerqiJcvt9, spenderwrUzqKY, {from: accounts[1]});
		const nullXAnnQD = await contractguVUkRp.allowance.call(ownertMiACxe, spenderuMK7ufT, {from: accounts[2]});

		assert.equal(nullMgEXFs, true)
		assert.equal(nullXAnnQD, 0)
		assert.equal(nullbMLzE9, 0)
		assert.equal(nullqplyvk, 0)
	});

	it('test for ERC20', async () => {
		const contractjRzLP3j = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const addedValueKpu58tk = BigInt("92")
		const spenderRcVkf51 = accounts[5]
		const valueXcx1pjf = BigInt("915")
		const tow0HwzlK = accounts[2]
		const nullcfts5lF = await contractjRzLP3j.increaseAllowance.call(spenderRcVkf51, addedValueKpu58tk, {from: accounts[0]});
		const nulljiEFtT = await contractjRzLP3j.transfer.call(tow0HwzlK, valueXcx1pjf, {from: accounts[5]});
	});
})