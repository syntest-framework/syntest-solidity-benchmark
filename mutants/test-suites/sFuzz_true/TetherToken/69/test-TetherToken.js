const TetherToken = artifacts.require("TetherToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TetherToken', (accounts) => {
	it('test for TetherToken', async () => {
		const uintZv0FnRw = BigInt("126")
		const stringfPu9s9m = "URGXtSBIKxhaNqB7FGJkpXi3Awzz6XmcWULrsVjpDDg4DXNNWUWGXbbAQLAFzd5GW249lpbLYe1TNW4LOFPrJf"
		const stringUljHi5p = "t1TRkDhyeuOJtE4fHwR3TRgxYpkz"
		const uintdKk2MvO = BigInt("1847")
		const TetherTokenIH11lbh = await TetherToken.new(uintZv0FnRw, stringfPu9s9m, stringUljHi5p, uintdKk2MvO, {from: accounts[0]});
		const addressby81hwu = accounts[2]
		const uintfflBTfw = BigInt("427")
		const addresstEGSeVd = accounts[5]
		const addresskJ9TJqz = accounts[3]
		const uintA9DDVLa = BigInt("1909")
		const uintr6xPlf8 = BigInt("1406")
		const addressiwLtgUX = accounts[3]
//		const addresswYhDTiY = await TetherTokenIH11lbh.deprecate.call(addressby81hwu, {from: accounts[4]});
//		const addressVz5TKSY = await TetherTokenIH11lbh.approve.call(addresstEGSeVd, uintfflBTfw, {from: accounts[2]});
//		const addressyllF4ot = await TetherTokenIH11lbh.deprecate.call(addresskJ9TJqz, {from: "0x0000000000000000000000000000000000000001"});
//		const uintM9PcFHy = await TetherTokenIH11lbh.issue.call(uintA9DDVLa, {from: accounts[1]});
//		const addressWZkNCwn = await TetherTokenIH11lbh.approve.call(addressiwLtgUX, uintr6xPlf8, {from: accounts[3]});

		await expect(TetherTokenIH11lbh.deprecate.call(addressby81hwu, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintKXz3QC0 = BigInt("1592")
		const stringrWdr8F = "iDj9DLz0EJVz4LdklcOEaw0RsvGqYAWO0tHhcOSDNrjChfeEIUMqK8UUaHuzlE4WMQYxb2ffYplKenbMqRKCFXmCO"
		const stringnHmNq0e = "Oq9Wd7"
		const uintqLrwc02 = BigInt("764")
		const TetherTokeni3qWFcf = await TetherToken.new(uintKXz3QC0, stringrWdr8F, stringnHmNq0e, uintqLrwc02, {from: accounts[1]});
		const uintXj1dIK0 = BigInt("1499")
		const addressLTxG6ag = accounts[0]
		const uintA58jXwM = BigInt("434")
		const addressVxq7KY5 = accounts[0]
		const addresshdtX77l = accounts[3]
		const addressUNkJFqG = accounts[1]
		const addressTbKfdag = accounts[0]
//		const uintvnz8VHp = await TetherTokeni3qWFcf.issue.call(uintXj1dIK0, {from: "0x0000000000000000000000000000000000000001"});
//		const uintJsvWOSG = await TetherTokeni3qWFcf.totalSupply.call({from: accounts[4]});
//		const addressVg97eiX = await TetherTokeni3qWFcf.deprecate.call(addressLTxG6ag, {from: accounts[3]});
//		const addressG82NEut = await TetherTokeni3qWFcf.transferFrom.call(addresshdtX77l, addressVxq7KY5, uintA58jXwM, {from: accounts[2]});
//		const uintAC9sUGA = await TetherTokeni3qWFcf.allowance.call(addressTbKfdag, addressUNkJFqG, {from: "0x0000000000000000000000000000000000000001"});

		await expect(TetherTokeni3qWFcf.issue.call(uintXj1dIK0, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintZdEOSv = BigInt("1255")
		const stringVl1tLZ1 = "UWkcAf12SIqUeqouVBN"
		const stringCb4cjQI = "JczGsQTiyxXivYr"
		const uintmy9r0AH = BigInt("788")
		const TetherTokennp4LI9o = await TetherToken.new(uintZdEOSv, stringVl1tLZ1, stringCb4cjQI, uintmy9r0AH, {from: accounts[4]});
		const addressDWXeAky = "0x0000000000000000000000000000000000000001"
		const addressuoLGNZ3 = "0x0000000000000000000000000000000000000001"
		const uintnK2R7c = await TetherTokennp4LI9o.totalSupply.call({from: accounts[2]});
		const uintaTJpGEW = await TetherTokennp4LI9o.balanceOf.call(addressDWXeAky, {from: accounts[2]});
		const uintMZ5fQM7 = await TetherTokennp4LI9o.balanceOf.call(addressuoLGNZ3, {from: accounts[3]});

		assert.equal(uintMZ5fQM7, BigInt("0"))
		assert.equal(uintaTJpGEW, BigInt("0"))
		assert.equal(uintnK2R7c, BigInt("1255"))
	});

	it('test for TetherToken', async () => {
		const uintqRKMTvT = BigInt("1820")
		const stringNxYnWwS = "sfxuziXIFtJkoOJp5zbwNt6xvYWpKeDYGzBObWLjezZg0goOgPdHp1ouW7zBqnYwSalDFgIV"
		const stringIvvPAIr = "MWO5khHA2uBpnKzYA3SSrChgKSkKaLst43yCu699LCbeS"
		const uintpjF7Wby = BigInt("653")
		const TetherTokenr7ftRnt = await TetherToken.new(uintqRKMTvT, stringNxYnWwS, stringIvvPAIr, uintpjF7Wby, {from: accounts[2]});
		const uintTxiqAnL = BigInt("1056")
		const addressAwyGMKI = accounts[3]
		const addressmIN0vew = accounts[4]
		const addressAVNmWtp = accounts[2]
		const addressCWIBNvX = accounts[1]
		const addresscTSNAXH = accounts[4]
		const addressAVTUwhb = "0x0000000000000000000000000000000000000001"
		const uintwZi1jTC = BigInt("1611")
		const uintjyMTrG4 = BigInt("61")
		const addresspD0fiIg = await TetherTokenr7ftRnt.approve.call(addressAwyGMKI, uintTxiqAnL, {from: accounts[0]});
		const uinth0WeQKi = await TetherTokenr7ftRnt.allowance.call(addressAVNmWtp, addressmIN0vew, {from: "0x0000000000000000000000000000000000000001"});
		const uintAgZLxaM = await TetherTokenr7ftRnt.allowance.call(addresscTSNAXH, addressCWIBNvX, {from: accounts[4]});
		const uintZgck6CA = await TetherTokenr7ftRnt.balanceOf.call(addressAVTUwhb, {from: accounts[5]});
		const uintamYicr7 = await TetherTokenr7ftRnt.issue.call(uintwZi1jTC, {from: accounts[2]});
//		const uintZjFkGKk = await TetherTokenr7ftRnt.issue.call(uintjyMTrG4, {from: accounts[5]});

		assert.equal(uintAgZLxaM, BigInt("0"))
		assert.equal(uintZgck6CA, BigInt("0"))
		assert.equal(uinth0WeQKi, BigInt("0"))
		await expect(TetherTokenr7ftRnt.issue.call(uintjyMTrG4, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintmDDufv5 = BigInt("2")
		const stringJ4rUgUS = "V8PyVRFJOmq3znPn2pBL3shDG3i5zRPbjjBsR1"
		const stringZFRZS0 = "pMuNVkJ4"
		const uintxlirUzE = BigInt("472")
		const TetherTokenbK1KVut = await TetherToken.new(uintmDDufv5, stringJ4rUgUS, stringZFRZS0, uintxlirUzE, {from: accounts[2]});
		const uintbfv1Bu0 = BigInt("1337")
		const addressLl965Uo = accounts[2]
		const addressN1fG9g0 = "0x0000000000000000000000000000000000000001"
		const uintS4z50EU = BigInt("994")
		const addressJ1sL3ol = accounts[5]
		const addressvk7cTdt = accounts[4]
		const addressGZp7Vyr = accounts[5]
		const uintZh9N2j = BigInt("1773")
		const uinteFrvTQP = BigInt("373")
		const uint0Pxo8B = BigInt("1380")
//		const addressm1V5Qxi = await TetherTokenbK1KVut.transferFrom.call(addressN1fG9g0, addressLl965Uo, uintbfv1Bu0, {from: accounts[3]});
//		const addressx9BXFKp = await TetherTokenbK1KVut.approve.call(addressJ1sL3ol, uintS4z50EU, {from: accounts[0]});
//		const uintqBPj1SO = await TetherTokenbK1KVut.allowance.call(addressGZp7Vyr, addressvk7cTdt, {from: accounts[3]});
//		const uintirxUDT = await TetherTokenbK1KVut.setParams.call(uinteFrvTQP, uintZh9N2j, {from: accounts[1]});
//		const uintvbywzbc = await TetherTokenbK1KVut.redeem.call(uint0Pxo8B, {from: accounts[2]});

		await expect(TetherTokenbK1KVut.transferFrom.call(addressN1fG9g0, addressLl965Uo, uintbfv1Bu0, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintpjEpOrC = BigInt("1177")
		const stringfuPlsLg = "hHL8VfwrhvwD5bMno3lD"
		const stringhGbKuyb = "jYhgXSKsGjDUHnP5V9j2PUDO8azxSYqGqP8al"
		const uintK0RNTi8 = BigInt("253")
		const TetherTokenbuagJY = await TetherToken.new(uintpjEpOrC, stringfuPlsLg, stringhGbKuyb, uintK0RNTi8, {from: accounts[1]});
		const addressxaDpjtT = accounts[0]
		const uintSOtkG3D = BigInt("419")
		const uintffHkHeI = BigInt("576")
		const addressdegVuB9 = accounts[4]
		const addressNpdMhJ7 = accounts[1]
		const uintgqFfLHL = await TetherTokenbuagJY.balanceOf.call(addressxaDpjtT, {from: accounts[3]});
		const uintW0S0xAi = await TetherTokenbuagJY.redeem.call(uintSOtkG3D, {from: accounts[1]});
//		const addressSY81Q5H = await TetherTokenbuagJY.transferFrom.call(addressNpdMhJ7, addressdegVuB9, uintffHkHeI, {from: accounts[1]});

		assert.equal(uintgqFfLHL, BigInt("0"))
		await expect(TetherTokenbuagJY.transferFrom.call(addressNpdMhJ7, addressdegVuB9, uintffHkHeI, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintuPBR2vf = BigInt("1691")
		const stringLmNF3NC = "Y7vNx368FkQmYe9LiqVzepKukzLB5"
		const stringIZ0Wh5b = "l5sak"
		const uintTTxk8bp = BigInt("254")
		const TetherTokenW7sUkC9 = await TetherToken.new(uintuPBR2vf, stringLmNF3NC, stringIZ0Wh5b, uintTTxk8bp, {from: accounts[1]});
		const uintocP16bE = BigInt("1663")
		const addressU2I5yCh = accounts[0]
		const addressQvCD37K = accounts[2]
		const addresswEYm0XY = accounts[4]
		const addresssLGYCK1 = accounts[4]
		const addresskzVDYl5 = accounts[4]
		const addresseXKqdCQ = accounts[2]
//		const addresslaVXzkZ = await TetherTokenW7sUkC9.transfer.call(addressU2I5yCh, uintocP16bE, {from: accounts[0]});
//		const addressZx35YDe = await TetherTokenW7sUkC9.deprecate.call(addressQvCD37K, {from: accounts[3]});
//		const uintmoIVUoO = await TetherTokenW7sUkC9.allowance.call(addresssLGYCK1, addresswEYm0XY, {from: accounts[5]});
//		const uintpBcnMAx = await TetherTokenW7sUkC9.allowance.call(addresseXKqdCQ, addresskzVDYl5, {from: accounts[5]});

		await expect(TetherTokenW7sUkC9.transfer.call(addressU2I5yCh, uintocP16bE, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uinthy3jeeh = BigInt("1241")
		const stringayOBmn = "Fhhax47sR"
		const stringTYUMDK = "28C60kSfUNhkHMIv7GBcYrwrtk126nYQaKbrfuoe5GY785YWZy6UuLgRdAO6EhM4q1MAoOjZiaj3CR5PFMr3nbjLTddXQ"
		const uintdWdyI7q = BigInt("1987")
		const TetherTokenk2hn8p = await TetherToken.new(uinthy3jeeh, stringayOBmn, stringTYUMDK, uintdWdyI7q, {from: "0x0000000000000000000000000000000000000001"});
		const uintkoVQKia = BigInt("1255")
		const addressVSO34P = accounts[1]
		const addressDPXMvVO = accounts[3]
		const addressSA0lEaR = accounts[2]
		const addressfE5lRqQ = await TetherTokenk2hn8p.transfer.call(addressVSO34P, uintkoVQKia, {from: accounts[0]});
		const uinteJDpAzQ = await TetherTokenk2hn8p.allowance.call(addressSA0lEaR, addressDPXMvVO, {from: accounts[4]});
	});

	it('test for TetherToken', async () => {
		const uintZ9ztz7 = BigInt("1255")
		const stringVl1tLZ1 = "UWkcAf12SIqUeqouVBN"
		const stringCb4cjQI = "JczGsQTiyxXivYr"
		const uintxgbVDHq = BigInt("788")
		const TetherTokennp4LI9o = await TetherToken.new(uintZ9ztz7, stringVl1tLZ1, stringCb4cjQI, uintxgbVDHq, {from: accounts[4]});
		const addressYxX4Jva = "0x00000000000000000000000000000000000000-1"
//		const uintMZ5fQM7 = await TetherTokennp4LI9o.balanceOf.call(addressYxX4Jva, {from: accounts[3]});

		await expect(TetherTokennp4LI9o.balanceOf.call(addressYxX4Jva, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintP1YQjJJ = BigInt("1874")
		const stringZtfQKV = "gCQyflt6F4uwwIfkxL4vrHad5sKNQ1Vkm4CHN"
		const string5yNace = "hGBh6Id2cpWDhtJ9b9356gpVpurEt9hJmwJF22GZS"
		const uinto3PXRKu = BigInt("1255")
		const TetherTokenRBoZsyn = await TetherToken.new(uintP1YQjJJ, stringZtfQKV, string5yNace, uinto3PXRKu, {from: accounts[3]});
		const uintH2SOGqt = BigInt("793")
		const uintOjaWjxc = BigInt("388")
//		const uintEqlRmr = await TetherTokenRBoZsyn.setParams.call(uintOjaWjxc, uintH2SOGqt, {from: accounts[2]});

		await expect(TetherTokenRBoZsyn.setParams.call(uintOjaWjxc, uintH2SOGqt, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintB1zAc9x = BigInt("1255")
		const stringVl1tLZ1 = "UWkcAf12SIqUeqouVBN"
		const stringCb4cjQI = "JczGsQTiyxXivYr"
		const uintxLtPUtD = BigInt("788")
		const TetherTokennp4LI9o = await TetherToken.new(uintB1zAc9x, stringVl1tLZ1, stringCb4cjQI, uintxLtPUtD, {from: accounts[4]});
		const uintJpV0ZAR = BigInt("582")
		const addressTEfh6t2 = accounts[0]
		const addressKB9sQc = accounts[2]
		const addressM4SiNB = "0x0000000000000000000000000000000000000000"
		const uintnK2R7c = await TetherTokennp4LI9o.totalSupply.call({from: accounts[2]});
		const addressacDNWy = await TetherTokennp4LI9o.approve.call(addressTEfh6t2, uintJpV0ZAR, {from: accounts[0]});
		const uintPxaubcI = await TetherTokennp4LI9o.totalSupply.call({from: accounts[5]});
		const addresse8miNK5 = await TetherTokennp4LI9o.deprecate.call(addressKB9sQc, {from: accounts[4]});
		const uintMZ5fQM7 = await TetherTokennp4LI9o.balanceOf.call(addressM4SiNB, {from: accounts[3]});

		assert.equal(uintMZ5fQM7, BigInt("0"))
		assert.equal(uintPxaubcI, BigInt("1255"))
		assert.equal(uintnK2R7c, BigInt("1255"))
	});

	it('test for TetherToken', async () => {
		const uintPzqMy7X = BigInt("1691")
		const stringLmNF3NC = "Y7vNx368FkQmYe9LiqVzepKukzLB5"
		const stringIZ0Wh5b = "l5sak"
		const uintsgmy61m = BigInt("254")
		const TetherTokenW7sUkC9 = await TetherToken.new(uintPzqMy7X, stringLmNF3NC, stringIZ0Wh5b, uintsgmy61m, {from: accounts[1]});
		const uintGaBtDcs = BigInt("1301")
		const uintc42DGbJ = BigInt("32")
		const uintdSBuFSR = BigInt("378")
		const uintQeX2cct = BigInt("1641")
		const addressb3vdjik = accounts[1]
//		const uintku2GzMB = await TetherTokenW7sUkC9.setParams.call(uintc42DGbJ, uintGaBtDcs, {from: accounts[1]});
//		const uinteK8sfq = await TetherTokenW7sUkC9.redeem.call(uintdSBuFSR, {from: accounts[0]});
//		const addresslaVXzkZ = await TetherTokenW7sUkC9.transfer.call(addressb3vdjik, uintQeX2cct, {from: accounts[0]});

		await expect(TetherTokenW7sUkC9.setParams.call(uintc42DGbJ, uintGaBtDcs, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})