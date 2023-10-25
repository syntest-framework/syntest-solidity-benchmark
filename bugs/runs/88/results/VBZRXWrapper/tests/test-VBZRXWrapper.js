const VBZRXWrapper = artifacts.require("VBZRXWrapper");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper', (accounts) => {
	it('test for VBZRXWrapper', async () => {
		const contracthxYC6KD = await VBZRXWrapper.new({from: accounts[5]});
		const valuewm9Ray8 = BigInt("1104")
		const valueHGGCEgF = BigInt("1529")
		const spenderZzrHUxP = accounts[2]
		await contracthxYC6KD.deposit.call(valuewm9Ray8, {from: accounts[1]});
		const nullr0Ix0mK = await contracthxYC6KD.approve.call(spenderZzrHUxP, valueHGGCEgF, {from: accounts[3]});
		const nullG1HHF2F = await contracthxYC6KD.claim.call({from: accounts[0]});
		const null66tyRa = await contracthxYC6KD.claim.call({from: accounts[0]});

		await expect(contracthxYC6KD.deposit.call(valuewm9Ray8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractZJzatMx = await VBZRXWrapper.new({from: accounts[3]});
		const valueCF0hmFp = BigInt("1886")
		const dstzxJ5C4V = accounts[2]
		const srccMxcyfY = accounts[1]
		const valueoCOIduS = BigInt("1880")
		const valueBqUEesm = BigInt("66")
		const nullDh88f2a = await contractZJzatMx.transferFrom.call(srccMxcyfY, dstzxJ5C4V, valueCF0hmFp, {from: accounts[2]});
		const null1mojdW = await contractZJzatMx.claim.call({from: accounts[4]});
		const nullOZhUE03 = await contractZJzatMx.claim.call({from: accounts[5]});
		await contractZJzatMx.withdraw.call(valueoCOIduS, {from: accounts[2]});
		await contractZJzatMx.deposit.call(valueBqUEesm, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractZJzatMx.transferFrom.call(srccMxcyfY, dstzxJ5C4V, valueCF0hmFp, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractpq4DiX1 = await VBZRXWrapper.new({from: "0x0000000000000000000000000000000000000001"});
		const valuediEmyWi = BigInt("813")
		const spenderqX6ca2T = accounts[4]
		const valuezwIZOz1 = BigInt("1355")
		const valuerPRV3zc = BigInt("1140")
		const nullcsCCHG = await contractpq4DiX1.approve.call(spenderqX6ca2T, valuediEmyWi, {from: accounts[2]});
		await contractpq4DiX1.withdraw.call(valuezwIZOz1, {from: accounts[1]});
		await contractpq4DiX1.deposit.call(valuerPRV3zc, {from: accounts[0]});
	});

	it('test for VBZRXWrapper', async () => {
		const contractAXuDQAd = await VBZRXWrapper.new({from: accounts[4]});
		const accountwnzk2ZG = accounts[4]
		const valuegon367l = BigInt("96")
		const spenderVTDVXEN = accounts[4]
		const nullRj7QvUe = await contractAXuDQAd.claimable.call(accountwnzk2ZG, {from: accounts[4]});
		const nullxMSiStx = await contractAXuDQAd.claim.call({from: accounts[4]});
		const nullgEvJco = await contractAXuDQAd.approve.call(spenderVTDVXEN, valuegon367l, {from: accounts[3]});

		await expect(contractAXuDQAd.claimable.call(accountwnzk2ZG, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractI1I1Bms = await VBZRXWrapper.new({from: accounts[4]});
		const valueYo2rews = BigInt("1933")
		const spenderMdwgHLg = accounts[3]
		const valueMRbrHmZ = BigInt("1258")
		const valueWzCBKP4 = BigInt("199")
		const nullwSzFw4S = await contractI1I1Bms.approve.call(spenderMdwgHLg, valueYo2rews, {from: accounts[3]});
		await contractI1I1Bms.withdraw.call(valueMRbrHmZ, {from: accounts[2]});
		await contractI1I1Bms.deposit.call(valueWzCBKP4, {from: accounts[1]});

		assert.equal(nullwSzFw4S, true)
		await expect(contractI1I1Bms.withdraw.call(valueMRbrHmZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractjjwEXCe = await VBZRXWrapper.new({from: accounts[3]});
		const valuevu6ZCXw = BigInt("1886")
		const dstgBtbtf = accounts[2]
		const srcMw1duFi = accounts[1]
		const valuevCKEHWW = BigInt("1867")
		const valuekI7RxMN = BigInt("66")
		const nullVpr6fmu = await contractjjwEXCe.claim.call({from: accounts[5]});
		const nullGlZexyl = await contractjjwEXCe.transferFrom.call(srcMw1duFi, dstgBtbtf, valuevu6ZCXw, {from: accounts[2]});
		const nullnwa2833 = await contractjjwEXCe.claim.call({from: accounts[4]});
		const nulltW2cDv5 = await contractjjwEXCe.claim.call({from: accounts[5]});
		await contractjjwEXCe.withdraw.call(valuevCKEHWW, {from: accounts[2]});
		await contractjjwEXCe.deposit.call(valuekI7RxMN, {from: "0x0000000000000000000000000000000000000001"});
		const null78qT03 = await contractjjwEXCe.claim.call({from: accounts[0]});

		assert.equal(nullVpr6fmu, 0)
		await expect(contractjjwEXCe.transferFrom.call(srcMw1duFi, dstgBtbtf, valuevu6ZCXw, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractx2i1Goh = await VBZRXWrapper.new({from: accounts[5]});
		const valuenx4tQ5B = BigInt("843")
		const dsth0MTssb = accounts[4]
		const valueAx39twT = BigInt("1104")
		const accountTfDnCdY = "0x0000000000000000000000000000000000000001"
		const valueU4q8tX0 = BigInt("1548")
		const spenderUCe6ZQf = accounts[2]
		const valueXm2Nh0z = BigInt("1529")
		const spenderheJiIsc = accounts[2]
		const nullGkfHi2 = await contractx2i1Goh.transfer.call(dsth0MTssb, valuenx4tQ5B, {from: accounts[1]});
		await contractx2i1Goh.deposit.call(valueAx39twT, {from: accounts[1]});
		const nullpNF558r = await contractx2i1Goh.claimable.call(accountTfDnCdY, {from: accounts[0]});
		const null2VJv0S = await contractx2i1Goh.claim.call({from: accounts[3]});
		const nullqG38SY7 = await contractx2i1Goh.approve.call(spenderUCe6ZQf, valueU4q8tX0, {from: accounts[3]});
		const nullkrSUJB = await contractx2i1Goh.approve.call(spenderheJiIsc, valueXm2Nh0z, {from: accounts[3]});
		const nullxKkZRz2 = await contractx2i1Goh.claim.call({from: accounts[0]});

		await expect(contractx2i1Goh.transfer.call(dsth0MTssb, valuenx4tQ5B, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper', async () => {
		const contractZxdKAbk = await VBZRXWrapper.new({from: accounts[1]});
		const valuep3ONZpZ = BigInt("758")
		const dstVaB6MA1 = "0x0000000000000000000000000000000000000001"
		const srcnh9O4p6 = accounts[1]
		const valueUdTGZxf = BigInt("1005")
		await contractZxdKAbk.exit.call({from: accounts[0]});
		const nullj5eXaGU = await contractZxdKAbk.transferFrom.call(srcnh9O4p6, dstVaB6MA1, valuep3ONZpZ, {from: accounts[0]});
		const nullqakYnk0 = await contractZxdKAbk.claim.call({from: accounts[4]});
		await contractZxdKAbk.withdraw.call(valueUdTGZxf, {from: accounts[2]});

		await expect(contractZxdKAbk.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})