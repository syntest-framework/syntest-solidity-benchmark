const ERC20 = artifacts.require("ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC20', (accounts) => {
	it('test for ERC20', async () => {
		const contractLHSpPLm = await ERC20.new({from: accounts[2]});
		const valueRdBQEu3 = BigInt("645")
		const toW8W6K3q = "0x0000000000000000000000000000000000000001"
		const fromcRXrfN = accounts[3]
		const valueKgpLm0 = BigInt("373")
		const tovOPR8fd = accounts[5]
		const valuekzQ1Aez = BigInt("1247")
		const toocJu0hO = accounts[0]
		const fromz0ppot2 = accounts[2]
		const nullKtCDnQ8 = await contractLHSpPLm.transferFrom.call(fromcRXrfN, toW8W6K3q, valueRdBQEu3, {from: accounts[2]});
		const nulluusiyKF = await contractLHSpPLm.transfer.call(tovOPR8fd, valueKgpLm0, {from: accounts[0]});
		const nullMuWazk = await contractLHSpPLm.totalSupply.call({from: accounts[3]});
		const nullShyYG0o = await contractLHSpPLm.transferFrom.call(fromz0ppot2, toocJu0hO, valuekzQ1Aez, {from: accounts[3]});

		await expect(contractLHSpPLm.transferFrom.call(fromcRXrfN, toW8W6K3q, valueRdBQEu3, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractpCp0qc4 = await ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const valueJFgpZec = BigInt("1397")
		const spenderqbMUEqM = accounts[5]
		const valueMYenkbA = BigInt("1305")
		const tonFvGkkP = accounts[4]
		const valuev0BtfJp = BigInt("1005")
		const tovmGyWh = accounts[0]
		const addedValueDtFnAxK = BigInt("384")
		const spendereiFymbM = accounts[4]
		const ownerat78Vmt = accounts[4]
		const nullUVvyX7 = await contractpCp0qc4.approve.call(spenderqbMUEqM, valueJFgpZec, {from: "0x0000000000000000000000000000000000000001"});
		const nullo2d1I5d = await contractpCp0qc4.transfer.call(tonFvGkkP, valueMYenkbA, {from: accounts[2]});
		const nullT58koCg = await contractpCp0qc4.transfer.call(tovmGyWh, valuev0BtfJp, {from: accounts[1]});
		const nullDtXExnu = await contractpCp0qc4.increaseAllowance.call(spendereiFymbM, addedValueDtFnAxK, {from: accounts[4]});
		const nullwwVGQ6 = await contractpCp0qc4.balanceOf.call(ownerat78Vmt, {from: accounts[0]});
	});

	it('test for ERC20', async () => {
		const contractPY4sEUO = await ERC20.new({from: accounts[2]});
		const ownergeT3SdE = accounts[4]
		const valuenMino0Z = BigInt("1533")
		const spender4R6lL0 = accounts[4]
		const addedValuebZPGttf = BigInt("1505")
		const spenderJ7MgyUW = accounts[0]
		const ownerkH63CEh = accounts[2]
		const nullimSmgmQ = await contractPY4sEUO.balanceOf.call(ownergeT3SdE, {from: accounts[1]});
		const nullEYUBWnz = await contractPY4sEUO.totalSupply.call({from: accounts[1]});
		const nullOxu7RIN = await contractPY4sEUO.approve.call(spender4R6lL0, valuenMino0Z, {from: accounts[1]});
		const nulldtFbgU1 = await contractPY4sEUO.totalSupply.call({from: accounts[5]});
		const nulll6agqi = await contractPY4sEUO.increaseAllowance.call(spenderJ7MgyUW, addedValuebZPGttf, {from: accounts[4]});
		const nulliNfwDXt = await contractPY4sEUO.balanceOf.call(ownerkH63CEh, {from: accounts[0]});

		assert.equal(nullEYUBWnz, 0)
		assert.equal(nullOxu7RIN, true)
		assert.equal(nulldtFbgU1, 0)
		assert.equal(nulliNfwDXt, 0)
		assert.equal(nullimSmgmQ, 0)
		assert.equal(nulll6agqi, true)
	});

	it('test for ERC20', async () => {
		const contracts0ynlJb = await ERC20.new({from: accounts[3]});
		const valuebdStpKE = BigInt("395")
		const spenderHvMu2Xb = accounts[2]
		const spenderNsniTlB = accounts[4]
		const ownerbXg2B18 = accounts[4]
		const ownersXqWfsU = accounts[4]
		const nullICzx9u2 = await contracts0ynlJb.approve.call(spenderHvMu2Xb, valuebdStpKE, {from: "0x0000000000000000000000000000000000000001"});
		const nullzGgAZPq = await contracts0ynlJb.allowance.call(ownerbXg2B18, spenderNsniTlB, {from: accounts[0]});
		const nullf1vcI9n = await contracts0ynlJb.totalSupply.call({from: accounts[5]});
		const nullSkHN1CA = await contracts0ynlJb.balanceOf.call(ownersXqWfsU, {from: accounts[4]});
		const nullOpUV2KI = await contracts0ynlJb.totalSupply.call({from: accounts[4]});

		assert.equal(nullICzx9u2, true)
		assert.equal(nullOpUV2KI, 0)
		assert.equal(nullSkHN1CA, 0)
		assert.equal(nullf1vcI9n, 0)
		assert.equal(nullzGgAZPq, 0)
	});

	it('test for ERC20', async () => {
		const contractVPTcKV = await ERC20.new({from: accounts[1]});
		const subtractedValueC2vKnGK = BigInt("1453")
		const spenderlin5uB = accounts[0]
		const valuecgvCOjm = BigInt("390")
		const tooehBZjZ = accounts[5]
		const fromk86QhT7 = accounts[1]
		const nulljXoUfdn = await contractVPTcKV.decreaseAllowance.call(spenderlin5uB, subtractedValueC2vKnGK, {from: accounts[0]});
		const nullPwLB2Rs = await contractVPTcKV.totalSupply.call({from: accounts[3]});
		const nullCiJvGx1 = await contractVPTcKV.transferFrom.call(fromk86QhT7, tooehBZjZ, valuecgvCOjm, {from: accounts[3]});

		await expect(contractVPTcKV.decreaseAllowance.call(spenderlin5uB, subtractedValueC2vKnGK, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ERC20', async () => {
		const contractkvZxBmS = await ERC20.new({from: accounts[0]});
		const spenderd6NpeY = accounts[2]
		const ownerQePZ2iR = accounts[1]
		const spender1WAAhG = "0x0000000000000000000000000000000000000001"
		const ownerhzsGvDU = accounts[4]
		const valuea29JuuN = BigInt("1682")
		const spenderlQAv6MB = accounts[3]
		const valueuvz5RJb = BigInt("1371")
		const toSJcxxbL = "0x0000000000000000000000000000000000000001"
		const nulllFijkO = await contractkvZxBmS.allowance.call(ownerQePZ2iR, spenderd6NpeY, {from: accounts[1]});
		const nullGDE6DP = await contractkvZxBmS.allowance.call(ownerhzsGvDU, spender1WAAhG, {from: accounts[1]});
		const nullFs6dbdw = await contractkvZxBmS.totalSupply.call({from: accounts[3]});
		const nullH5WcVto = await contractkvZxBmS.approve.call(spenderlQAv6MB, valuea29JuuN, {from: accounts[1]});
		const nullItQ1EWU = await contractkvZxBmS.transfer.call(toSJcxxbL, valueuvz5RJb, {from: accounts[0]});

		assert.equal(nullFs6dbdw, 0)
		assert.equal(nullGDE6DP, 0)
		assert.equal(nullH5WcVto, true)
		assert.equal(nulllFijkO, 0)
		await expect(contractkvZxBmS.transfer.call(toSJcxxbL, valueuvz5RJb, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})