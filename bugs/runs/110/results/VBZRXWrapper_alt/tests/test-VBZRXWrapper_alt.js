const VBZRXWrapper_alt = artifacts.require("VBZRXWrapper_alt");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper_alt', (accounts) => {
	it('test for VBZRXWrapper_alt', async () => {
		const contractjc5XrmN = await VBZRXWrapper_alt.new({from: accounts[3]});
		const valueMD0DrE = BigInt("1099")
		const dstDET1F7 = accounts[1]
		const srcKLafEb = accounts[4]
		const valueBbdrptl = BigInt("863")
		const valueQGEcht = BigInt("1475")
		const dstqmSH9No = accounts[0]
		const nullIXj86ZP = await contractjc5XrmN.transferFrom.call(srcKLafEb, dstDET1F7, valueMD0DrE, {from: accounts[3]});
		await contractjc5XrmN.withdraw.call(valueBbdrptl, {from: accounts[3]});
		const nullALKKGkL = await contractjc5XrmN.transfer.call(dstqmSH9No, valueQGEcht, {from: accounts[3]});

		await expect(contractjc5XrmN.transferFrom.call(srcKLafEb, dstDET1F7, valueMD0DrE, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractg2G66YT = await VBZRXWrapper_alt.new({from: accounts[0]});
		const accountjfJOxhO = accounts[0]
		const valueAwlF7Zl = BigInt("998")
		const dstfyvtlUv = accounts[3]
		const srcRarzinN = accounts[2]
		const valueqXc0h3E = BigInt("1427")
		const nulliL4TwdR = await contractg2G66YT.claimable.call(accountjfJOxhO, {from: accounts[1]});
		const nullu8NHrfI = await contractg2G66YT.transferFrom.call(srcRarzinN, dstfyvtlUv, valueAwlF7Zl, {from: accounts[0]});
		await contractg2G66YT.withdraw.call(valueqXc0h3E, {from: accounts[1]});

		assert.equal(nulliL4TwdR, 0)
		await expect(contractg2G66YT.transferFrom.call(srcRarzinN, dstfyvtlUv, valueAwlF7Zl, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractUM4DHSS = await VBZRXWrapper_alt.new({from: accounts[4]});
		const valuevEqhaR0 = BigInt("821")
		const toggleaK03Fg = true
		const addrCVeqq7l = "0x0000000000000000000000000000000000000001"
		const toggleTri51So = true
		const addrYOgJjmg = accounts[0]
		const valuei4OdI0l = BigInt("1112")
		const spenderMRf1Ebj = accounts[5]
		await contractUM4DHSS.withdraw.call(valuevEqhaR0, {from: accounts[2]});
		await contractUM4DHSS.setBridge.call(addrCVeqq7l, toggleaK03Fg, {from: accounts[1]});
		await contractUM4DHSS.setBridge.call(addrYOgJjmg, toggleTri51So, {from: accounts[0]});
		const nulltVQrjz = await contractUM4DHSS.approve.call(spenderMRf1Ebj, valuei4OdI0l, {from: "0x0000000000000000000000000000000000000001"});
		const nullFN1RO16 = await contractUM4DHSS.claim.call({from: accounts[4]});

		await expect(contractUM4DHSS.withdraw.call(valuevEqhaR0, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractZCBPYnq = await VBZRXWrapper_alt.new({from: accounts[3]});
		const valueCZHoUpw = BigInt("1636")
		const dstfI0Qvf = accounts[0]
		const valueGvuln24 = BigInt("1121")
		const spenderhOSPAVN = accounts[2]
		const toggleRxdszYT = false
		const addrYocq3RD = accounts[2]
		const valuefjiCgWF = BigInt("1795")
		const valueM1BGXRc = BigInt("1899")
		const valuelgPnVbv = BigInt("1891")
		const dstuAYAJqv = accounts[0]
		const nullpBh17UO = await contractZCBPYnq.transfer.call(dstfI0Qvf, valueCZHoUpw, {from: accounts[0]});
		const nulltFkhL7c = await contractZCBPYnq.approve.call(spenderhOSPAVN, valueGvuln24, {from: accounts[5]});
		await contractZCBPYnq.setBridge.call(addrYocq3RD, toggleRxdszYT, {from: "0x0000000000000000000000000000000000000001"});
		await contractZCBPYnq.withdraw.call(valuefjiCgWF, {from: "0x0000000000000000000000000000000000000001"});
		await contractZCBPYnq.withdraw.call(valueM1BGXRc, {from: accounts[0]});
		const nullpYajX1 = await contractZCBPYnq.transfer.call(dstuAYAJqv, valuelgPnVbv, {from: accounts[1]});

		await expect(contractZCBPYnq.transfer.call(dstfI0Qvf, valueCZHoUpw, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractCST265I = await VBZRXWrapper_alt.new({from: "0x0000000000000000000000000000000000000001"});
		const valuefBfWjm = BigInt("627")
		const dstocT8Ty4 = accounts[4]
		const srcUL67BvD = accounts[2]
		const valueJyOYYR = BigInt("1926")
		const spenderk1Y1NL0 = accounts[5]
		const valueaI7AxER = BigInt("301")
		const nullZlbqbeH = await contractCST265I.transferFrom.call(srcUL67BvD, dstocT8Ty4, valuefBfWjm, {from: accounts[0]});
		const nulliWKfh9u = await contractCST265I.approve.call(spenderk1Y1NL0, valueJyOYYR, {from: accounts[2]});
		await contractCST265I.deposit.call(valueaI7AxER, {from: accounts[3]});
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractgH1oa76 = await VBZRXWrapper_alt.new({from: accounts[2]});
		const valueMCdEQBr = BigInt("234")
		const spenderIYD7Q16 = accounts[0]
		const valuebdvvhQn = BigInt("889")
		const spenderZHOQDH = accounts[3]
		const valueKBRcuOk = BigInt("890")
		const spenderFb54mp = accounts[1]
		const valueEDjrsIQ = BigInt("1872")
		const spenderDZGZuk9 = accounts[1]
		const nullcvaRCXR = await contractgH1oa76.approve.call(spenderIYD7Q16, valueMCdEQBr, {from: accounts[4]});
		const null8SGIUS = await contractgH1oa76.claim.call({from: accounts[2]});
		const nullAmhHRXh = await contractgH1oa76.claim.call({from: accounts[4]});
		const nullPkV5OiG = await contractgH1oa76.approve.call(spenderZHOQDH, valuebdvvhQn, {from: accounts[4]});
		const nullE1b0zES = await contractgH1oa76.approve.call(spenderFb54mp, valueKBRcuOk, {from: accounts[4]});
		const nullhKm33TR = await contractgH1oa76.approve.call(spenderDZGZuk9, valueEDjrsIQ, {from: accounts[0]});

		assert.equal(null8SGIUS, 0)
		assert.equal(nullAmhHRXh, 0)
		assert.equal(nullE1b0zES, true)
		assert.equal(nullPkV5OiG, true)
		assert.equal(nullcvaRCXR, true)
		assert.equal(nullhKm33TR, true)
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractUHW0cH = await VBZRXWrapper_alt.new({from: accounts[4]});
		const valuehMvVKz = BigInt("954")
		const valuer1WOSmI = BigInt("463")
		const spenderPCaIjgE = accounts[3]
		const accountgRDzHyE = accounts[4]
		const valueY4ucqtM = BigInt("478")
		const valueZSs8GDZ = BigInt("1264")
		const nullmcO4Rhm = await contractUHW0cH.claim.call({from: accounts[4]});
		await contractUHW0cH.deposit.call(valuehMvVKz, {from: accounts[3]});
		const nullbYOq8Y = await contractUHW0cH.approve.call(spenderPCaIjgE, valuer1WOSmI, {from: accounts[4]});
		const nullqGDnTZM = await contractUHW0cH.claimable.call(accountgRDzHyE, {from: "0x0000000000000000000000000000000000000001"});
		await contractUHW0cH.deposit.call(valueY4ucqtM, {from: accounts[4]});
		await contractUHW0cH.deposit.call(valueZSs8GDZ, {from: accounts[1]});

		assert.equal(nullmcO4Rhm, 0)
		await expect(contractUHW0cH.deposit.call(valuehMvVKz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractZ3otyzW = await VBZRXWrapper_alt.new({from: accounts[1]});
		const accountXkeec32 = accounts[1]
		const valuefdSU8d = BigInt("1977")
		const valueGqLaJ9 = BigInt("592")
		const valueRi9LL14 = BigInt("1438")
		const dsthEJ0HT8 = accounts[3]
		const srcgxSE2Eq = "0x0000000000000000000000000000000000000001"
		const accountea615f4 = accounts[3]
		await contractZ3otyzW.exit.call({from: accounts[3]});
		const nullNeadACJ = await contractZ3otyzW.claimable.call(accountXkeec32, {from: accounts[0]});
		const nullyQ9UJ0A = await contractZ3otyzW.claim.call({from: accounts[4]});
		await contractZ3otyzW.withdraw.call(valuefdSU8d, {from: accounts[5]});
		await contractZ3otyzW.withdraw.call(valueGqLaJ9, {from: accounts[4]});
		const nullBWHRLAT = await contractZ3otyzW.transferFrom.call(srcgxSE2Eq, dsthEJ0HT8, valueRi9LL14, {from: accounts[4]});
		const nullh61FxU9 = await contractZ3otyzW.claimable.call(accountea615f4, {from: accounts[2]});
		await contractZ3otyzW.exit.call({from: accounts[4]});
		await contractZ3otyzW.exit.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(contractZ3otyzW.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractL6MgD18 = await VBZRXWrapper_alt.new({from: accounts[3]});
		const toggleq15tRQW = false
		const addrTuDvFT = accounts[2]
		const accountTqDwG6C = accounts[0]
		const valueLa4wBgw = BigInt("1083")
		const spenderHnc8u7S = accounts[1]
		const valuegLZBjEt = BigInt("916")
		const dstIYzoLJ = accounts[1]
		const srcQHfvAl2 = accounts[2]
		const nullqJqWked = await contractL6MgD18.claim.call({from: accounts[0]});
		await contractL6MgD18.setBridge.call(addrTuDvFT, toggleq15tRQW, {from: accounts[1]});
		const nullKnUTmQH = await contractL6MgD18.claimable.call(accountTqDwG6C, {from: accounts[0]});
		const nullSEXEH50 = await contractL6MgD18.approve.call(spenderHnc8u7S, valueLa4wBgw, {from: "0x0000000000000000000000000000000000000001"});
		const nulloyQppQs = await contractL6MgD18.transferFrom.call(srcQHfvAl2, dstIYzoLJ, valuegLZBjEt, {from: accounts[5]});

		assert.equal(nullqJqWked, 0)
		await expect(contractL6MgD18.setBridge.call(addrTuDvFT, toggleq15tRQW, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractiviUR9G = await VBZRXWrapper_alt.new({from: accounts[0]});
		const togglefIiPs9F = false
		const addrFvIsCl9 = accounts[2]
		const valuedRsJUk0 = BigInt("998")
		const dstlhubE6a = accounts[4]
		const srcnA1TQMj = accounts[3]
		await contractiviUR9G.setBridge.call(addrFvIsCl9, togglefIiPs9F, {from: accounts[0]});
		const nullhQy9EHx = await contractiviUR9G.transferFrom.call(srcnA1TQMj, dstlhubE6a, valuedRsJUk0, {from: accounts[0]});

		await expect(contractiviUR9G.setBridge.call(addrFvIsCl9, togglefIiPs9F, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})