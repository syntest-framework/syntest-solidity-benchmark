const VBZRXWrapper_alt = artifacts.require("VBZRXWrapper_alt");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('VBZRXWrapper_alt', (accounts) => {
	it('test for VBZRXWrapper_alt', async () => {
		const contractncV5XmB = await VBZRXWrapper_alt.new({from: accounts[3]});
		const valueeJtgau = BigInt("397")
		const valueoFFTF4R = BigInt("1852")
		const dstFQco5uG = accounts[1]
		const srcMMyeK4Q = accounts[5]
		const valueFYLh0Qf = BigInt("1793")
		const spendersimW9uC = accounts[0]
		const valueHSQEEam = BigInt("1727")
		await contractncV5XmB.deposit.call(valueeJtgau, {from: accounts[2]});
		const nullJLt70cM = await contractncV5XmB.transferFrom.call(srcMMyeK4Q, dstFQco5uG, valueoFFTF4R, {from: accounts[2]});
		const nullssQcdtF = await contractncV5XmB.approve.call(spendersimW9uC, valueFYLh0Qf, {from: accounts[0]});
		await contractncV5XmB.deposit.call(valueHSQEEam, {from: accounts[4]});

		await expect(contractncV5XmB.deposit.call(valueeJtgau, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractDh55ywn = await VBZRXWrapper_alt.new({from: accounts[2]});
		const accountdAXX7xI = "0x0000000000000000000000000000000000000001"
		const valueVKQVrz = BigInt("749")
		const spenderSN6zXY4 = accounts[3]
		const valueUHBEIR = BigInt("245")
		const dstWsii3eA = accounts[5]
		const srcVP4mg7 = accounts[1]
		const nullV5SU0CC = await contractDh55ywn.claimable.call(accountdAXX7xI, {from: accounts[0]});
		const nulllv41COc = await contractDh55ywn.approve.call(spenderSN6zXY4, valueVKQVrz, {from: accounts[2]});
		const null1bRJK8 = await contractDh55ywn.transferFrom.call(srcVP4mg7, dstWsii3eA, valueUHBEIR, {from: accounts[2]});

		assert.equal(nullV5SU0CC, 0)
		assert.equal(nulllv41COc, true)
		await expect(contractDh55ywn.transferFrom.call(srcVP4mg7, dstWsii3eA, valueUHBEIR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractpZvhOCb = await VBZRXWrapper_alt.new({from: accounts[2]});
		const accountsgF4Klb = accounts[3]
		const accountZipiKsy = accounts[0]
		const togglegke8xTm = false
		const addrZkrdtwZ = accounts[3]
		const value46vw17 = BigInt("1436")
		const nullTHGWuaX = await contractpZvhOCb.claimable.call(accountsgF4Klb, {from: accounts[2]});
		const nullMPhugzq = await contractpZvhOCb.claimable.call(accountZipiKsy, {from: accounts[2]});
		await contractpZvhOCb.setBridge.call(addrZkrdtwZ, togglegke8xTm, {from: accounts[4]});
		const nullFwIqzT4 = await contractpZvhOCb.claim.call({from: accounts[3]});
		await contractpZvhOCb.withdraw.call(value46vw17, {from: accounts[4]});

		assert.equal(nullMPhugzq, 0)
		assert.equal(nullTHGWuaX, 0)
		await expect(contractpZvhOCb.setBridge.call(addrZkrdtwZ, togglegke8xTm, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractybcQn34 = await VBZRXWrapper_alt.new({from: accounts[2]});
		const valueW78fE3l = BigInt("69")
		const spenderjPB2ZrY = accounts[3]
		const valuewmoXh9b = BigInt("228")
		const valueEHFWoXC = BigInt("292")
		const dstwx0VFKS = accounts[0]
		const srcvgXQ8u = accounts[1]
		await contractybcQn34.exit.call({from: accounts[2]});
		const nullucj5i9Z = await contractybcQn34.approve.call(spenderjPB2ZrY, valueW78fE3l, {from: accounts[3]});
		await contractybcQn34.withdraw.call(valuewmoXh9b, {from: "0x0000000000000000000000000000000000000001"});
		const nullJyJjOCR = await contractybcQn34.transferFrom.call(srcvgXQ8u, dstwx0VFKS, valueEHFWoXC, {from: accounts[1]});
		await contractybcQn34.exit.call({from: accounts[0]});
		await contractybcQn34.exit.call({from: accounts[2]});

		await expect(contractybcQn34.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractwGVg8n = await VBZRXWrapper_alt.new({from: accounts[4]});
		const valuei8KCtv = BigInt("231")
		const dstDekkfE3 = accounts[3]
		const valuegY9Ck7X = BigInt("1091")
		const dstrrwrtpE = accounts[3]
		const srca44nSR = accounts[1]
		const valueIo8JY8I = BigInt("644")
		const spenderogUhEgk = accounts[4]
		const nullZMhrBBq = await contractwGVg8n.transfer.call(dstDekkfE3, valuei8KCtv, {from: accounts[2]});
		const nullqbubMR = await contractwGVg8n.transferFrom.call(srca44nSR, dstrrwrtpE, valuegY9Ck7X, {from: accounts[1]});
		const nullLuFJ0u6 = await contractwGVg8n.approve.call(spenderogUhEgk, valueIo8JY8I, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractwGVg8n.transfer.call(dstDekkfE3, valuei8KCtv, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractzd4WTG6 = await VBZRXWrapper_alt.new({from: accounts[2]});
		const accountXDnX7y = accounts[3]
		const accountEjEUaHv = accounts[0]
		const valuehUcGkR5 = BigInt("1436")
		const nullHJafjm = await contractzd4WTG6.claimable.call(accountXDnX7y, {from: accounts[2]});
		const nullTQXpoK7 = await contractzd4WTG6.claimable.call(accountEjEUaHv, {from: accounts[2]});
		const nullmIDOxwG = await contractzd4WTG6.claim.call({from: accounts[3]});
		await contractzd4WTG6.withdraw.call(valuehUcGkR5, {from: accounts[4]});

		assert.equal(nullHJafjm, 0)
		assert.equal(nullTQXpoK7, 0)
		assert.equal(nullmIDOxwG, 0)
		await expect(contractzd4WTG6.withdraw.call(valuehUcGkR5, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractKP1fyJ6 = await VBZRXWrapper_alt.new({from: accounts[2]});
		const toggleWTmhDlp = true
		const addrlmPSg7H = accounts[3]
		const valueQWVksqr = BigInt("793")
		const dstGzmL8cE = accounts[5]
		const srcLCJGL0e = accounts[0]
		const valueJOC6SEx = BigInt("749")
		const spendergR9OrB = accounts[3]
		const valueT76IMkM = BigInt("245")
		const dstaCwHtUo = accounts[5]
		const srcI4t5Kun = accounts[1]
		await contractKP1fyJ6.setBridge.call(addrlmPSg7H, toggleWTmhDlp, {from: accounts[2]});
		const null52yqAH = await contractKP1fyJ6.transferFrom.call(srcLCJGL0e, dstGzmL8cE, valueQWVksqr, {from: "0x0000000000000000000000000000000000000001"});
		const nullGnysht = await contractKP1fyJ6.approve.call(spendergR9OrB, valueJOC6SEx, {from: accounts[2]});
		const nullzFBcGcE = await contractKP1fyJ6.transferFrom.call(srcI4t5Kun, dstaCwHtUo, valueT76IMkM, {from: accounts[2]});

		await expect(contractKP1fyJ6.setBridge.call(addrlmPSg7H, toggleWTmhDlp, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractgOho4Qo = await VBZRXWrapper_alt.new({from: "0x0000000000000000000000000000000000000001"});
		const valuecb9SVyw = BigInt("1025")
		const valuey0CBqJy = BigInt("1215")
		await contractgOho4Qo.deposit.call(valuecb9SVyw, {from: accounts[3]});
		const nullS1Lo3XV = await contractgOho4Qo.claim.call({from: accounts[3]});
		await contractgOho4Qo.withdraw.call(valuey0CBqJy, {from: accounts[1]});
		await contractgOho4Qo.exit.call({from: accounts[0]});
	});

	it('test for VBZRXWrapper_alt', async () => {
		const contractGHLuA6 = await VBZRXWrapper_alt.new({from: accounts[2]});
		const accountlWc2xJV = "0x00000000000000000000000000000000000000-1"
		const valueEWFmL9c = BigInt("1644")
		const valueEfw5Ki = BigInt("1780")
		const dstbck3oLS = accounts[2]
		const valueGyirrMd = BigInt("1674")
		const spenderpwimods = accounts[3]
		const valueY5lvNKn = BigInt("253")
		const dst8Cna3s = accounts[6]
		const srcZwohaQT = accounts[2]
		const accountflDUFZx = accounts[5]
		const accountcYfaLIQ = accounts[1]
		const valueSR3TA4O = BigInt("93")
		const dstbXGcFs = accounts[2]
		const nulluZfgH7 = await contractGHLuA6.claimable.call(accountlWc2xJV, {from: accounts[0]});
		await contractGHLuA6.exit.call({from: accounts[2]});
		await contractGHLuA6.exit.call({from: accounts[4]});
		await contractGHLuA6.withdraw.call(valueEWFmL9c, {from: accounts[0]});
		const nullZIYnRe = await contractGHLuA6.transfer.call(dstbck3oLS, valueEfw5Ki, {from: accounts[1]});
		const nullemYYu7k = await contractGHLuA6.approve.call(spenderpwimods, valueGyirrMd, {from: accounts[4]});
		const nullD6i3M5L = await contractGHLuA6.transferFrom.call(srcZwohaQT, dst8Cna3s, valueY5lvNKn, {from: accounts[2]});
		const nulliXOkSg5 = await contractGHLuA6.claimable.call(accountflDUFZx, {from: accounts[2]});
		const nulliFvHHjv = await contractGHLuA6.claimable.call(accountcYfaLIQ, {from: accounts[0]});
		const nulluoETaXP = await contractGHLuA6.transfer.call(dstbXGcFs, valueSR3TA4O, {from: accounts[2]});

		await expect(contractGHLuA6.claimable.call(accountlWc2xJV, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})