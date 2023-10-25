const VBZRXWrapper_alt = artifacts.require("VBZRXWrapper_alt");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper_alt', (accounts) => {
	it('test for VBZRXWrapper_alt', async () => {
		const contractKSWZ2mO = await VBZRXWrapper_alt.new({from: accounts[4]});
		const valueToejHbk = BigInt("686")
		const dstfSxtVZD = accounts[3]
		const valuetlfs3c = BigInt("1982")
		const valuebP9ljaQ = BigInt("1708")
		const dstfuAoIze = accounts[0]
		const srcYU1BQBH = accounts[3]
		const toggleeYdIe0y = false
		const addrHfQsOH = accounts[3]
		const nullHgEkKr = await contractKSWZ2mO.transfer.call(dstfSxtVZD, valueToejHbk, {from: accounts[2]});
		await contractKSWZ2mO.deposit.call(valuetlfs3c, {from: accounts[2]});
		const nullbfAONoF = await contractKSWZ2mO.transferFrom.call(srcYU1BQBH, dstfuAoIze, valuebP9ljaQ, {from: accounts[2]});
		await contractKSWZ2mO.setBridge.call(addrHfQsOH, toggleeYdIe0y, {from: accounts[3]});

		await expect(contractKSWZ2mO.transfer.call(dstfSxtVZD, valueToejHbk, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractQetg3yv = await VBZRXWrapper_alt.new({from: accounts[1]});
		const valueY82Q4fq = BigInt("132")
		const valuebiXk7r = BigInt("1380")
		const valuengQQH5a = BigInt("365")
		const valueyvMLx2Q = BigInt("788")
		await contractQetg3yv.withdraw.call(valueY82Q4fq, {from: accounts[0]});
		await contractQetg3yv.deposit.call(valuebiXk7r, {from: accounts[5]});
		await contractQetg3yv.exit.call({from: accounts[2]});
		await contractQetg3yv.withdraw.call(valuengQQH5a, {from: accounts[2]});
		await contractQetg3yv.deposit.call(valueyvMLx2Q, {from: accounts[5]});

		await expect(contractQetg3yv.withdraw.call(valueY82Q4fq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractLimegn9 = await VBZRXWrapper_alt.new({from: accounts[0]});
		const nully1ksFPa = await contractLimegn9.claim.call({from: "0x0000000000000000000000000000000000000001"});
		const nulljGjVM1G = await contractLimegn9.claim.call({from: accounts[2]});
		await contractLimegn9.exit.call({from: accounts[3]});

		assert.equal(nulljGjVM1G, 0)
		assert.equal(nully1ksFPa, 0)
		await expect(contractLimegn9.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractnVkG4MK = await VBZRXWrapper_alt.new({from: accounts[1]});
		const valueAMrJGVC = BigInt("782")
		const spenderuJkOWPp = accounts[2]
		const accountenyksX4 = accounts[5]
		const valueAoraKD6 = BigInt("995")
		const valueklJTI2B = BigInt("1146")
		const dstgQLF3S1 = accounts[3]
		const srcnWfj4ua = accounts[0]
		const accountVJLjleW = accounts[1]
		const togglebhbSjRs = false
		const addrw87spPe = accounts[0]
		const nullcnP4QR = await contractnVkG4MK.approve.call(spenderuJkOWPp, valueAMrJGVC, {from: accounts[3]});
		const nullJ5NEVHa = await contractnVkG4MK.claimable.call(accountenyksX4, {from: accounts[4]});
		await contractnVkG4MK.withdraw.call(valueAoraKD6, {from: accounts[3]});
		const nullRHPPDE = await contractnVkG4MK.transferFrom.call(srcnWfj4ua, dstgQLF3S1, valueklJTI2B, {from: accounts[4]});
		const nulls4TW5IP = await contractnVkG4MK.claimable.call(accountVJLjleW, {from: accounts[4]});
		await contractnVkG4MK.setBridge.call(addrw87spPe, togglebhbSjRs, {from: accounts[3]});

		assert.equal(nullJ5NEVHa, 0)
		assert.equal(nullcnP4QR, true)
		await expect(contractnVkG4MK.withdraw.call(valueAoraKD6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractvTH7ds0 = await VBZRXWrapper_alt.new({from: accounts[2]});
		const valuekiVabKb = BigInt("765")
		const valuewDRAmw = BigInt("148")
		const valuegMHLw9Z = BigInt("645")
		const spenderORHwYWs = accounts[1]
		await contractvTH7ds0.deposit.call(valuekiVabKb, {from: accounts[4]});
		const nulljQAfgyx = await contractvTH7ds0.claim.call({from: accounts[3]});
		await contractvTH7ds0.withdraw.call(valuewDRAmw, {from: accounts[5]});
		const nullJqoUr8 = await contractvTH7ds0.approve.call(spenderORHwYWs, valuegMHLw9Z, {from: accounts[4]});
		const nullLHkBdm = await contractvTH7ds0.claim.call({from: accounts[3]});

		await expect(contractvTH7ds0.deposit.call(valuekiVabKb, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractIEYwmKj = await VBZRXWrapper_alt.new({from: accounts[3]});
		const toggleqVBHxbo = true
		const addryW5AHgP = accounts[1]
		const accountQCElYqw = accounts[5]
		const nullFgzTfJK = await contractIEYwmKj.claim.call({from: accounts[0]});
		await contractIEYwmKj.setBridge.call(addryW5AHgP, toggleqVBHxbo, {from: accounts[5]});
		const nullKkFo8yn = await contractIEYwmKj.claimable.call(accountQCElYqw, {from: "0x0000000000000000000000000000000000000001"});
		await contractIEYwmKj.exit.call({from: accounts[2]});
		await contractIEYwmKj.exit.call({from: accounts[4]});

		assert.equal(nullFgzTfJK, 0)
		await expect(contractIEYwmKj.setBridge.call(addryW5AHgP, toggleqVBHxbo, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractiRyIOzt = await VBZRXWrapper_alt.new({from: "0x0000000000000000000000000000000000000001"});
		const valueTu7APug = BigInt("1434")
		const togglePe4JL2f = false
		const addrTXOtzV0 = accounts[3]
		const valuedSDM2w = BigInt("1846")
		const dstEU1MYw1 = accounts[4]
		const srcrpveA8H = accounts[3]
		const nullWE6UGxy = await contractiRyIOzt.claim.call({from: accounts[5]});
		await contractiRyIOzt.deposit.call(valueTu7APug, {from: accounts[4]});
		await contractiRyIOzt.setBridge.call(addrTXOtzV0, togglePe4JL2f, {from: accounts[3]});
		const nullM0sCXZ = await contractiRyIOzt.transferFrom.call(srcrpveA8H, dstEU1MYw1, valuedSDM2w, {from: accounts[0]});
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractZRSMWsW = await VBZRXWrapper_alt.new({from: accounts[0]});
		const accountMbwH3oN = accounts[2]
		const togglevleyYx = false
		const addrXT8t7OX = accounts[0]
		const nullsIKCADW = await contractZRSMWsW.claimable.call(accountMbwH3oN, {from: accounts[2]});
		await contractZRSMWsW.setBridge.call(addrXT8t7OX, togglevleyYx, {from: accounts[0]});

		assert.equal(nullsIKCADW, 0)
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractEiL5PIz = await VBZRXWrapper_alt.new({from: accounts[0]});
		const valueYSHJCzl = BigInt("0")
		const dstXkUHLuy = accounts[2]
		const accountzQ2QKYe = accounts[1]
		const valuejkrrgwj = BigInt("1184")
		const dstlVE71cT = accounts[4]
		const nullpRKMGm = await contractEiL5PIz.transfer.call(dstXkUHLuy, valueYSHJCzl, {from: accounts[0]});
		const nullp0e6BAa = await contractEiL5PIz.claimable.call(accountzQ2QKYe, {from: accounts[2]});
		const nullImMK117 = await contractEiL5PIz.claim.call({from: accounts[4]});
		await contractEiL5PIz.exit.call({from: accounts[4]});
		const nullHeW9dto = await contractEiL5PIz.transfer.call(dstlVE71cT, valuejkrrgwj, {from: accounts[2]});

		await expect(contractEiL5PIz.transfer.call(dstXkUHLuy, valueYSHJCzl, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})