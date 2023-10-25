const VBZRXWrapper_alt = artifacts.require("VBZRXWrapper_alt");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper_alt', (accounts) => {
	it('test for VBZRXWrapper_alt', async () => {
		const contractD61omJU = await VBZRXWrapper_alt.new({from: accounts[4]});
		const valueKtBNSHC = BigInt("830")
		const dstPcnaYzi = accounts[0]
		const srcqH3TVnR = accounts[3]
		const valueH76iFc = BigInt("946")
		const dstLIYQfG = "0x0000000000000000000000000000000000000001"
		const srcEmBvTo = accounts[3]
		const valueTuww8aJ = BigInt("1976")
		const valueJgHEmnR = BigInt("706")
		const nullY5HRmd1 = await contractD61omJU.transferFrom.call(srcqH3TVnR, dstPcnaYzi, valueKtBNSHC, {from: accounts[0]});
		const nullxs6rT4w = await contractD61omJU.transferFrom.call(srcEmBvTo, dstLIYQfG, valueH76iFc, {from: accounts[1]});
		await contractD61omJU.withdraw.call(valueTuww8aJ, {from: accounts[1]});
		await contractD61omJU.deposit.call(valueJgHEmnR, {from: accounts[3]});

		await expect(contractD61omJU.transferFrom.call(srcqH3TVnR, dstPcnaYzi, valueKtBNSHC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractvcrWGPO = await VBZRXWrapper_alt.new({from: accounts[4]});
		const valuemLTgjHr = BigInt("747")
		const spenderLBPAdW8 = accounts[3]
		const nullZrWApD6 = await contractvcrWGPO.approve.call(spenderLBPAdW8, valuemLTgjHr, {from: accounts[3]});
		const nullTah47tf = await contractvcrWGPO.claim.call({from: accounts[0]});

		assert.equal(nullTah47tf, 0)
		assert.equal(nullZrWApD6, true)
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractccl1dYK = await VBZRXWrapper_alt.new({from: accounts[4]});
		const valueINz8m0x = BigInt("515")
		const valuehmOhj51 = BigInt("1489")
		await contractccl1dYK.exit.call({from: accounts[2]});
		await contractccl1dYK.deposit.call(valueINz8m0x, {from: accounts[0]});
		const nullMsjFQuv = await contractccl1dYK.claim.call({from: accounts[0]});
		await contractccl1dYK.withdraw.call(valuehmOhj51, {from: accounts[5]});

		await expect(contractccl1dYK.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractPQIPPuV = await VBZRXWrapper_alt.new({from: accounts[1]});
		const accountjFrcZJV = accounts[1]
		const valuevUCNCrP = BigInt("126")
		const valuevJoBjm0 = BigInt("459")
		const spenderKCN35Zt = accounts[5]
		const nullAB5Nytu = await contractPQIPPuV.claimable.call(accountjFrcZJV, {from: accounts[0]});
		const nullD4o7CNP = await contractPQIPPuV.claim.call({from: accounts[0]});
		await contractPQIPPuV.withdraw.call(valuevUCNCrP, {from: accounts[1]});
		const nullPMgKaA7 = await contractPQIPPuV.approve.call(spenderKCN35Zt, valuevJoBjm0, {from: accounts[3]});
		const nullelW30t7 = await contractPQIPPuV.claim.call({from: accounts[2]});

		assert.equal(nullAB5Nytu, 0)
		assert.equal(nullD4o7CNP, 0)
		await expect(contractPQIPPuV.withdraw.call(valuevUCNCrP, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractuuypNiZ = await VBZRXWrapper_alt.new({from: accounts[0]});
		const togglerq7nJVo = true
		const addrlIizUfK = accounts[0]
		const valueWN6YAa4 = BigInt("1281")
		const valuepLXh82L = BigInt("693")
		await contractuuypNiZ.setBridge.call(addrlIizUfK, togglerq7nJVo, {from: accounts[1]});
		await contractuuypNiZ.withdraw.call(valueWN6YAa4, {from: accounts[1]});
		await contractuuypNiZ.withdraw.call(valuepLXh82L, {from: accounts[0]});
		const nullGmK9KdH = await contractuuypNiZ.claim.call({from: accounts[4]});

		await expect(contractuuypNiZ.setBridge.call(addrlIizUfK, togglerq7nJVo, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractwiTGr0l = await VBZRXWrapper_alt.new({from: accounts[4]});
		const valuesQeLVcj = BigInt("1292")
		const togglem1v3wx = false
		const addryYs9FxN = accounts[4]
		const accounthi5zY0e = accounts[1]
		const valuej2OBJ3r = BigInt("1998")
		const spenderJioMorD = accounts[1]
		await contractwiTGr0l.deposit.call(valuesQeLVcj, {from: accounts[0]});
		await contractwiTGr0l.setBridge.call(addryYs9FxN, togglem1v3wx, {from: accounts[5]});
		const nulldEpwweb = await contractwiTGr0l.claimable.call(accounthi5zY0e, {from: "0x0000000000000000000000000000000000000001"});
		const nullmBI7vVu = await contractwiTGr0l.approve.call(spenderJioMorD, valuej2OBJ3r, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractwiTGr0l.deposit.call(valuesQeLVcj, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractjxixim5 = await VBZRXWrapper_alt.new({from: "0x0000000000000000000000000000000000000001"});
		const valueLg7d5oV = BigInt("426")
		const valuevaWr1Py = BigInt("2026")
		const valueH5GF1lq = BigInt("1318")
		const dstJ2yPk12 = accounts[4]
		const srcEEen2j4 = accounts[0]
		const valuev8Tm1HP = BigInt("1734")
		const dst8tDSos = accounts[1]
		const srcAe6nMQc = accounts[3]
		await contractjxixim5.withdraw.call(valueLg7d5oV, {from: accounts[0]});
		await contractjxixim5.withdraw.call(valuevaWr1Py, {from: accounts[3]});
		const nullFr3O8kM = await contractjxixim5.claim.call({from: accounts[0]});
		const nullM6afuXf = await contractjxixim5.transferFrom.call(srcEEen2j4, dstJ2yPk12, valueH5GF1lq, {from: accounts[2]});
		const nullGFwXbit = await contractjxixim5.transferFrom.call(srcAe6nMQc, dst8tDSos, valuev8Tm1HP, {from: accounts[1]});
		const nullBCABND = await contractjxixim5.claim.call({from: accounts[4]});
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractxkWjvVJ = await VBZRXWrapper_alt.new({from: accounts[4]});
		const accountKzh5a4S = accounts[2]
		const valuestS0iK = BigInt("1998")
		const spendersqu1aNt = accounts[1]
		const valuegppCqiY = BigInt("1818")
		const dstUU0qWYW = accounts[4]
		const nullGcJ0Wsm = await contractxkWjvVJ.claimable.call(accountKzh5a4S, {from: "0x0000000000000000000000000000000000000001"});
		const nulleazZ1cZ = await contractxkWjvVJ.approve.call(spendersqu1aNt, valuestS0iK, {from: "0x0000000000000000000000000000000000000001"});
		const nullXYUh1T2 = await contractxkWjvVJ.transfer.call(dstUU0qWYW, valuegppCqiY, {from: accounts[3]});

		assert.equal(nullGcJ0Wsm, 0)
		assert.equal(nulleazZ1cZ, true)
		await expect(contractxkWjvVJ.transfer.call(dstUU0qWYW, valuegppCqiY, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractrGat51 = await VBZRXWrapper_alt.new({from: accounts[4]});
		const accountnuhz9aQ = accounts[3]
		const toggleqR06AEN = true
		const addrmgrIjWh = accounts[0]
		const nullsleUU8o = await contractrGat51.claimable.call(accountnuhz9aQ, {from: "0x0000000000000000000000000000000000000001"});
		await contractrGat51.setBridge.call(addrmgrIjWh, toggleqR06AEN, {from: accounts[4]});

		assert.equal(nullsleUU8o, 0)
	});
})