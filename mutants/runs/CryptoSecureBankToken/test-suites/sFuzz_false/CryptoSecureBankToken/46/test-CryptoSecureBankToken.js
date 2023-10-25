const CryptoSecureBankToken = artifacts.require("CryptoSecureBankToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CryptoSecureBankToken', (accounts) => {
	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenC86RFWS = await CryptoSecureBankToken.new({from: "0x0000000000000000000000000000000000000001"});
		const addresscgCyiMl = accounts[0]
		const addressG1zB1ST = accounts[0]
		const uintkx4ptiJ = BigInt("995")
		const addressSMBkdqP = accounts[4]
		const uintQlXildV = BigInt("1741")
		const addressn1BbSpU = accounts[0]
		const addressWGr7fy9 = await CryptoSecureBankTokenC86RFWS.setOwner2.call(addresscgCyiMl, {from: accounts[4]});
		const uintr4iAPI = await CryptoSecureBankTokenC86RFWS.balanceOf.call(addressG1zB1ST, {from: "0x0000000000000000000000000000000000000001"});
		const boolJd1E5JF = await CryptoSecureBankTokenC86RFWS.transfer.call(addressSMBkdqP, uintkx4ptiJ, {from: accounts[4]});
		const boolLLTocfs = await CryptoSecureBankTokenC86RFWS.transfer.call(addressn1BbSpU, uintQlXildV, {from: accounts[1]});
		const addresslP12eQ0 = await CryptoSecureBankTokenC86RFWS.getOwner.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenYpkfZke = await CryptoSecureBankToken.new({from: accounts[1]});
		const addressBCnLvwH = accounts[3]
		const addressTLXZTSO = accounts[3]
		const addressPGQPJeQ = accounts[0]
		const uintzmofb5i = await CryptoSecureBankTokenYpkfZke.allowance.call(addressTLXZTSO, addressBCnLvwH, {from: accounts[4]});
		const boolg3EZw7l = await CryptoSecureBankTokenYpkfZke.deprecate.call(addressPGQPJeQ, {from: accounts[2]});

		assert.equal(uintzmofb5i, BigInt("0"))
		await expect(CryptoSecureBankTokenYpkfZke.deprecate.call(addressPGQPJeQ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenOPI16xt = await CryptoSecureBankToken.new({from: accounts[0]});
		const uintdPhGJqC = BigInt("1749")
		const addresshgxTcwU = accounts[2]
		const addressCYS0am1 = accounts[1]
		const uintX8sOa6r = BigInt("1778")
		const addressECHOqtB = accounts[3]
		const addressJig0mAm = accounts[2]
		const addressWVvLmq9 = accounts[4]
		const addressmAfT6bA = accounts[5]
		const addressLCbbkdp = accounts[2]
		const booljux5zyk = await CryptoSecureBankTokenOPI16xt.transferFrom.call(addressCYS0am1, addresshgxTcwU, uintdPhGJqC, {from: accounts[0]});
		await CryptoSecureBankTokenOPI16xt.pause.call({from: accounts[1]});
		const boolhQElsO = await CryptoSecureBankTokenOPI16xt.transfer.call(addressECHOqtB, uintX8sOa6r, {from: accounts[1]});
		const uintzv6riBP = await CryptoSecureBankTokenOPI16xt.allowance.call(addressWVvLmq9, addressJig0mAm, {from: accounts[4]});
		const uintPnwHoKo = await CryptoSecureBankTokenOPI16xt.allowance.call(addressLCbbkdp, addressmAfT6bA, {from: accounts[0]});
		await CryptoSecureBankTokenOPI16xt.onlyOwner.call({from: accounts[3]});

		await expect(CryptoSecureBankTokenOPI16xt.transferFrom.call(addressCYS0am1, addresshgxTcwU, uintdPhGJqC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenzxsfwtL = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintAX7FwB = BigInt("675")
		const uintmAd8hrV = BigInt("1689")
		const address0UQRGO = accounts[1]
		await CryptoSecureBankTokenzxsfwtL.whenPaused.call({from: accounts[0]});
		const addressyzmKBi4 = await CryptoSecureBankTokenzxsfwtL.getOwner.call({from: accounts[3]});
		const uintiEAtHrc = await CryptoSecureBankTokenzxsfwtL.setParams.call(uintmAd8hrV, uintAX7FwB, {from: accounts[0]});
		const addressWC0UNkW = await CryptoSecureBankTokenzxsfwtL.removeBlackList.call(address0UQRGO, {from: accounts[5]});

		await expect(CryptoSecureBankTokenzxsfwtL.whenPaused.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenuFT1eG3 = await CryptoSecureBankToken.new({from: accounts[0]});
		const uintZtbVwhB = BigInt("543")
		const addressWMQ0VoZ = accounts[4]
		const addressh9ls0d1 = accounts[0]
		const boolg7ChPke = await CryptoSecureBankTokenuFT1eG3.redeem.call(uintZtbVwhB, {from: accounts[0]});
		const addressPlP5oBm = await CryptoSecureBankTokenuFT1eG3.destroyBlackFunds.call(addressWMQ0VoZ, {from: accounts[1]});
		const addressFg2NiHb = await CryptoSecureBankTokenuFT1eG3.transferOwnership.call(addressh9ls0d1, {from: accounts[2]});

		assert.equal(boolg7ChPke, true)
		await expect(CryptoSecureBankTokenuFT1eG3.destroyBlackFunds.call(addressWMQ0VoZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenFCsJHkX = await CryptoSecureBankToken.new({from: accounts[4]});
		const uintm2uyMjL = BigInt("53")
		const addressCGVLBFE = accounts[0]
		const addressOLBcplo = accounts[0]
		const uintB2xzaf6 = BigInt("818")
		const addressGt5nivR = accounts[4]
		const boolkSERXr2 = await CryptoSecureBankTokenFCsJHkX.approve.call(addressCGVLBFE, uintm2uyMjL, {from: "0x0000000000000000000000000000000000000001"});
		const addressh4CQgJ = await CryptoSecureBankTokenFCsJHkX.getOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const addressRBFUZEW = await CryptoSecureBankTokenFCsJHkX.destroyBlackFunds.call(addressOLBcplo, {from: accounts[4]});
		const boolrkoZ9ye = await CryptoSecureBankTokenFCsJHkX.transfer.call(addressGt5nivR, uintB2xzaf6, {from: accounts[5]});

		assert.equal(addressh4CQgJ, 0xBA38627E5c7a773856cC275530259D7E8420B41a)
		assert.equal(boolkSERXr2, true)
		await expect(CryptoSecureBankTokenFCsJHkX.destroyBlackFunds.call(addressOLBcplo, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenNgyU5CR = await CryptoSecureBankToken.new({from: accounts[5]});
		const addressN7EQURb = accounts[3]
		const uintTXl4pBo = BigInt("8")
		const uintERFBw35 = await CryptoSecureBankTokenNgyU5CR.balanceOf.call(addressN7EQURb, {from: accounts[3]});
		const boolf5mRduv = await CryptoSecureBankTokenNgyU5CR.redeem.call(uintTXl4pBo, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintERFBw35, BigInt("0"))
		await expect(CryptoSecureBankTokenNgyU5CR.redeem.call(uintTXl4pBo, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenrDFlY5 = await CryptoSecureBankToken.new({from: accounts[2]});
		const uintrskGlbx = BigInt("1866")
		const addressIcuqfcB = "0x0000000000000000000000000000000000000001"
		const addressBEFTYts = accounts[1]
		const uintYXNIgjy = BigInt("1006")
		const addresso7JI25y = accounts[4]
		const uintOoJ0Cvd = BigInt("1445")
		const addressttfKBQ9 = accounts[3]
		const boolbEjiXW9 = await CryptoSecureBankTokenrDFlY5.transfer.call(addressIcuqfcB, uintrskGlbx, {from: accounts[2]});
		const uintfhB6xT1 = await CryptoSecureBankTokenrDFlY5.balanceOf.call(addressBEFTYts, {from: accounts[1]});
		await CryptoSecureBankTokenrDFlY5.whenPaused.call({from: accounts[2]});
		const boolNsYxJMm = await CryptoSecureBankTokenrDFlY5.transfer.call(addresso7JI25y, uintYXNIgjy, {from: accounts[1]});
		const boolcyEjBRk = await CryptoSecureBankTokenrDFlY5.transfer.call(addressttfKBQ9, uintOoJ0Cvd, {from: accounts[1]});

		assert.equal(boolbEjiXW9, true)
		assert.equal(uintfhB6xT1, BigInt("0"))
		await expect(CryptoSecureBankTokenrDFlY5.whenPaused.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenYpkfZke = await CryptoSecureBankToken.new({from: accounts[1]});
		const addressJO6ZKeG = accounts[3]
		const addressbpTisQP = accounts[3]
		const uintKXUWlGz = BigInt("1229")
		const addresseslsiQd = accounts[2]
		const addressItj8jIc = accounts[1]
		const uintzmofb5i = await CryptoSecureBankTokenYpkfZke.allowance.call(addressbpTisQP, addressJO6ZKeG, {from: accounts[4]});
		const uintCyDyoLH = await CryptoSecureBankTokenYpkfZke.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const boolfV6Kes = await CryptoSecureBankTokenYpkfZke.transferFrom.call(addressItj8jIc, addresseslsiQd, uintKXUWlGz, {from: accounts[0]});

		assert.equal(uintCyDyoLH, BigInt("100000000000000000000000000"))
		assert.equal(uintzmofb5i, BigInt("0"))
		await expect(CryptoSecureBankTokenYpkfZke.transferFrom.call(addressItj8jIc, addresseslsiQd, uintKXUWlGz, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenYpkfZke = await CryptoSecureBankToken.new({from: accounts[1]});
		const addressmJSw4nR = accounts[3]
		const addressPo0H7Bh = accounts[4]
		const addressmJyhMkU = accounts[1]
		const uintB5icRJR = BigInt("984")
		const addressRSTrzIJ = accounts[4]
		const uintzmofb5i = await CryptoSecureBankTokenYpkfZke.allowance.call(addressPo0H7Bh, addressmJSw4nR, {from: accounts[4]});
		const addressIHKeNUh = await CryptoSecureBankTokenYpkfZke.transferOwnership.call(addressmJyhMkU, {from: accounts[2]});
		const boolwbJ2ghn = await CryptoSecureBankTokenYpkfZke.transfer.call(addressRSTrzIJ, uintB5icRJR, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintzmofb5i, BigInt("0"))
		await expect(CryptoSecureBankTokenYpkfZke.transferOwnership.call(addressmJyhMkU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenkdp2f4I = await CryptoSecureBankToken.new({from: accounts[4]});
		const addresswukwHMz = accounts[5]
		const addressrp4g4Ft = accounts[1]
		const addressd9AwJ19 = accounts[1]
		const addressQqNg1e8 = accounts[5]
		const boolGSL9hBh = await CryptoSecureBankTokenkdp2f4I.getBlackListStatus.call(addresswukwHMz, {from: accounts[0]});
		await CryptoSecureBankTokenkdp2f4I.unpause.call({from: accounts[3]});
		const addressims2gSs = await CryptoSecureBankTokenkdp2f4I.setOwner2.call(addressrp4g4Ft, {from: accounts[0]});
		const booljlxQOOh = await CryptoSecureBankTokenkdp2f4I.deprecate.call(addressd9AwJ19, {from: accounts[2]});
		const uintDffKzOE = await CryptoSecureBankTokenkdp2f4I.totalSupply.call({from: accounts[0]});
		const boolMqlXFiJ = await CryptoSecureBankTokenkdp2f4I.deprecate.call(addressQqNg1e8, {from: accounts[3]});

		assert.equal(boolGSL9hBh, false)
		await expect(CryptoSecureBankTokenkdp2f4I.unpause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokengGaLet = await CryptoSecureBankToken.new({from: accounts[2]});
		const addressmpA1Qef = accounts[5]
		const uintzVXc0ir = BigInt("822")
		const addressprBFd0z = accounts[0]
		const addressWW5cfvv = accounts[1]
		const addressYkeYeea = accounts[4]
		const addressgt9pUvC = await CryptoSecureBankTokengGaLet.setOwner2.call(addressmpA1Qef, {from: accounts[2]});
		const boolYDXe99l = await CryptoSecureBankTokengGaLet.transferFrom.call(addressWW5cfvv, addressprBFd0z, uintzVXc0ir, {from: accounts[2]});
		const addressTlXKFda = await CryptoSecureBankTokengGaLet.destroyBlackFunds.call(addressYkeYeea, {from: accounts[0]});

		await expect(CryptoSecureBankTokengGaLet.transferFrom.call(addressWW5cfvv, addressprBFd0z, uintzVXc0ir, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenNgyU5CR = await CryptoSecureBankToken.new({from: accounts[5]});
		const addressPL6TZg = accounts[0]
		const addresslED3cz5 = accounts[4]
		const addresseQRwZSe = await CryptoSecureBankTokenNgyU5CR.transferOwnership.call(addressPL6TZg, {from: accounts[5]});
		const uintERFBw35 = await CryptoSecureBankTokenNgyU5CR.balanceOf.call(addresslED3cz5, {from: accounts[3]});

		assert.equal(uintERFBw35, BigInt("0"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenYpkfZke = await CryptoSecureBankToken.new({from: accounts[1]});
		const addressoSQpyI3 = accounts[1]
		const addressfRzwb6K = accounts[4]
		const addressy8ukBB = accounts[3]
		const addressUJGJcQN = await CryptoSecureBankTokenYpkfZke.addBlackList.call(addressoSQpyI3, {from: accounts[1]});
		const uintzmofb5i = await CryptoSecureBankTokenYpkfZke.allowance.call(addressy8ukBB, addressfRzwb6K, {from: accounts[4]});

		assert.equal(uintzmofb5i, BigInt("0"))
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokengGaLet = await CryptoSecureBankToken.new({from: accounts[2]});
		const addressxbSL0wm = accounts[5]
		await CryptoSecureBankTokengGaLet.pause.call({from: accounts[2]});
		const addressTlXKFda = await CryptoSecureBankTokengGaLet.destroyBlackFunds.call(addressxbSL0wm, {from: accounts[0]});

		await expect(CryptoSecureBankTokengGaLet.pause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenrDFlY5 = await CryptoSecureBankToken.new({from: accounts[2]});
		const uintH9tO0GL = BigInt("639")
		const uintqQAA6Yu = BigInt("370")
		const addressvthURYK = accounts[4]
		const uint1wUtF0 = BigInt("1866")
		const addressemQumxp = "0x0000000000000000000000000000000000000001"
		const uintmFvLFNN = await CryptoSecureBankTokenrDFlY5.setParams.call(uintqQAA6Yu, uintH9tO0GL, {from: accounts[2]});
		const addressfZegZ3M = await CryptoSecureBankTokenrDFlY5.destroyBlackFunds.call(addressvthURYK, {from: accounts[4]});
		const boolbEjiXW9 = await CryptoSecureBankTokenrDFlY5.transfer.call(addressemQumxp, uint1wUtF0, {from: accounts[2]});

		await expect(CryptoSecureBankTokenrDFlY5.setParams.call(uintqQAA6Yu, uintH9tO0GL, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenYpkfZke = await CryptoSecureBankToken.new({from: accounts[1]});
		const addressuNQF1I = accounts[3]
		const addressqiT1l0s = accounts[3]
		const addressFMbcS5L = accounts[3]
		const addressX09Sej5 = accounts[1]
		const uintUvb0IUA = BigInt("1191")
		const uintDtzFkEA = BigInt("551")
		const uintI7eMveQ = await CryptoSecureBankTokenYpkfZke.balanceOf.call(addressuNQF1I, {from: accounts[1]});
		const uintzmofb5i = await CryptoSecureBankTokenYpkfZke.allowance.call(addressFMbcS5L, addressqiT1l0s, {from: accounts[4]});
		const addresssfhWO6P = await CryptoSecureBankTokenYpkfZke.removeBlackList.call(addressX09Sej5, {from: accounts[1]});
		const uintMDA4jwx = await CryptoSecureBankTokenYpkfZke.setParams.call(uintDtzFkEA, uintUvb0IUA, {from: accounts[0]});

		assert.equal(uintI7eMveQ, BigInt("0"))
		assert.equal(uintzmofb5i, BigInt("0"))
		await expect(CryptoSecureBankTokenYpkfZke.setParams.call(uintDtzFkEA, uintUvb0IUA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenFn8w9kT = await CryptoSecureBankToken.new({from: accounts[1]});
		const addressM2PCnwP = accounts[2]
		const addressyf9zZrt = accounts[3]
		const uintqcBiL7j = BigInt("1195")
		const addressXGrDcH2 = accounts[0]
		const uintzvKqJgT = BigInt("590")
		const uintfbysu8X = await CryptoSecureBankTokenFn8w9kT.balanceOf.call(addressM2PCnwP, {from: accounts[3]});
		const boolJl6JFCd = await CryptoSecureBankTokenFn8w9kT.deprecate.call(addressyf9zZrt, {from: accounts[1]});
		const boolYeL5QBn = await CryptoSecureBankTokenFn8w9kT.redeem.call(uintqcBiL7j, {from: "0x0000000000000000000000000000000000000001"});
		const addresswr6Kvhc = await CryptoSecureBankTokenFn8w9kT.setOwner2.call(addressXGrDcH2, {from: accounts[4]});
		const boolyuIPy8N = await CryptoSecureBankTokenFn8w9kT.redeem.call(uintzvKqJgT, {from: accounts[3]});

		assert.equal(boolJl6JFCd, true)
		assert.equal(uintfbysu8X, BigInt("0"))
		await expect(CryptoSecureBankTokenFn8w9kT.redeem.call(uintqcBiL7j, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CryptoSecureBankToken', async () => {
		const CryptoSecureBankTokenNgyU5CR = await CryptoSecureBankToken.new({from: accounts[5]});
		const uintq08XkGb = BigInt("0")
		const addressU6hK8Az = accounts[5]
		const addressrVdrCbW = accounts[1]
		const boolAx51zem = await CryptoSecureBankTokenNgyU5CR.transferFrom.call(addressrVdrCbW, addressU6hK8Az, uintq08XkGb, {from: accounts[2]});

		assert.equal(boolAx51zem, true)
	});
})