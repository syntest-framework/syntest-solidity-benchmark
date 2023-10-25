const DatrixoEquityToken = artifacts.require("DatrixoEquityToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DatrixoEquityToken', (accounts) => {
	it('test for DatrixoEquityToken', async () => {
		const addressVOZqgI9 = accounts[4]
		const uintJIzFnh0 = BigInt("609")
		const DatrixoEquityTokenSmRQD3d = await DatrixoEquityToken.new(addressVOZqgI9, uintJIzFnh0, {from: accounts[2]});
		const addressJmvyX2 = accounts[5]
		const uintWR1Tm0j = BigInt("1660")
		const addressvy2K6NI = accounts[0]
		const boolIrCCIh = await DatrixoEquityTokenSmRQD3d.removeShareholder.call(addressJmvyX2, {from: accounts[1]});
		const addressarrayVjexQTd = await DatrixoEquityTokenSmRQD3d.getShareholdersArray.call({from: accounts[1]});
		const boolXPq8nnm = await DatrixoEquityTokenSmRQD3d.transfer.call(addressvy2K6NI, uintWR1Tm0j, {from: accounts[4]});

		await expect(DatrixoEquityTokenSmRQD3d.removeShareholder.call(addressJmvyX2, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressPEw4tqr = accounts[2]
		const uintOMuD6oN = BigInt("986")
		const DatrixoEquityTokenRDDGvJj = await DatrixoEquityToken.new(addressPEw4tqr, uintOMuD6oN, {from: accounts[1]});
		const uintjzqyfh = BigInt("85")
		const addressDbX3ec5 = accounts[0]
		await DatrixoEquityTokenRDDGvJj.afterStartTime.call({from: accounts[0]});
		await DatrixoEquityTokenRDDGvJj.onlyOwner.call({from: accounts[4]});
		const boollcoFOG = await DatrixoEquityTokenRDDGvJj.transfer.call(addressDbX3ec5, uintjzqyfh, {from: accounts[3]});

		await expect(DatrixoEquityTokenRDDGvJj.afterStartTime.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressPkarkwr = accounts[1]
		const uintRWL93h4 = BigInt("1693")
		const DatrixoEquityTokenBuI0T5 = await DatrixoEquityToken.new(addressPkarkwr, uintRWL93h4, {from: "0x0000000000000000000000000000000000000001"});
		const uintefLWbtv = BigInt("547")
		const addressd621H8b = accounts[2]
		const addressOinh7q7 = accounts[0]
		const uintMIugqtz = BigInt("1095")
		const addresscffSBW = accounts[3]
		const uintBvg1Jmq = BigInt("1210")
		const addressaDlBPXP = accounts[3]
		const addressJaeFiC2 = accounts[0]
		const uintWPKvJJp = BigInt("1223")
		const addresssV4UfWM = accounts[0]
		const addressGb8PET7 = accounts[4]
		const boolelMYFoe = await DatrixoEquityTokenBuI0T5.transferFrom.call(addressOinh7q7, addressd621H8b, uintefLWbtv, {from: accounts[1]});
		const boolARa8jc5 = await DatrixoEquityTokenBuI0T5.transfer.call(addresscffSBW, uintMIugqtz, {from: accounts[0]});
		await DatrixoEquityTokenBuI0T5.afterStartTime.call({from: accounts[4]});
		const boolTEqIMNf = await DatrixoEquityTokenBuI0T5.transferFrom.call(addressJaeFiC2, addressaDlBPXP, uintBvg1Jmq, {from: "0x0000000000000000000000000000000000000001"});
		const boolg7NpCUe = await DatrixoEquityTokenBuI0T5.transferFrom.call(addressGb8PET7, addresssV4UfWM, uintWPKvJJp, {from: accounts[0]});
	});

	it('test for DatrixoEquityToken', async () => {
		const addressp3pM3A = accounts[4]
		const uintuxYWhq4 = BigInt("609")
		const DatrixoEquityTokenSmRQD3d = await DatrixoEquityToken.new(addressp3pM3A, uintuxYWhq4, {from: accounts[2]});
		const uintcXZqwKJ = BigInt("1020")
		const addresszJwiWNg = accounts[3]
		const addressp8f1fDS = accounts[3]
		const addressf7SOlR2 = accounts[5]
		const uintvtpFje = BigInt("1689")
		const uintfc8CxzC = BigInt("1660")
		const addressde39rVZ = accounts[0]
		const booldNb7k53 = await DatrixoEquityTokenSmRQD3d.transferFrom.call(addressp8f1fDS, addresszJwiWNg, uintcXZqwKJ, {from: accounts[4]});
		const boolIrCCIh = await DatrixoEquityTokenSmRQD3d.removeShareholder.call(addressf7SOlR2, {from: accounts[1]});
		const addressarrayVjexQTd = await DatrixoEquityTokenSmRQD3d.getShareholdersArray.call({from: accounts[1]});
		const uintLiVsXpa = await DatrixoEquityTokenSmRQD3d.setStart.call(uintvtpFje, {from: accounts[1]});
		const boolXPq8nnm = await DatrixoEquityTokenSmRQD3d.transfer.call(addressde39rVZ, uintfc8CxzC, {from: accounts[4]});

		await expect(DatrixoEquityTokenSmRQD3d.transferFrom.call(addressp8f1fDS, addresszJwiWNg, uintcXZqwKJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressQXLtfn = accounts[4]
		const uintUPsBNKn = BigInt("609")
		const DatrixoEquityTokenSmRQD3d = await DatrixoEquityToken.new(addressQXLtfn, uintUPsBNKn, {from: accounts[2]});
		const uint9olufE = BigInt("1020")
		const addresscj5D7TO = accounts[3]
		const addressU9JGGkO = accounts[4]
		const addressjr5tYz = accounts[5]
		const uintg8UyOyb = BigInt("1689")
		const uintvQl4RHL = BigInt("1660")
		const addresscFyQXNX = accounts[0]
		const booldNb7k53 = await DatrixoEquityTokenSmRQD3d.transferFrom.call(addressU9JGGkO, addresscj5D7TO, uint9olufE, {from: accounts[4]});
		const boolIrCCIh = await DatrixoEquityTokenSmRQD3d.removeShareholder.call(addressjr5tYz, {from: accounts[1]});
		const addressarrayVjexQTd = await DatrixoEquityTokenSmRQD3d.getShareholdersArray.call({from: accounts[1]});
		const uintLiVsXpa = await DatrixoEquityTokenSmRQD3d.setStart.call(uintg8UyOyb, {from: accounts[1]});
		const boolXPq8nnm = await DatrixoEquityTokenSmRQD3d.transfer.call(addresscFyQXNX, uintvQl4RHL, {from: accounts[4]});
		const addressarraywhnNjvq = await DatrixoEquityTokenSmRQD3d.getShareholdersArray.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(booldNb7k53, true)
		await expect(DatrixoEquityTokenSmRQD3d.removeShareholder.call(addressjr5tYz, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressBIJqvok = accounts[0]
		const uintHbSnoyv = BigInt("1670")
		const DatrixoEquityTokenKWZYHpe = await DatrixoEquityToken.new(addressBIJqvok, uintHbSnoyv, {from: accounts[3]});
		const uintgbZsOpx = BigInt("1040")
		const uintntzS7k = BigInt("697")
		const addressD2vRwT7 = accounts[1]
		const addressarrayVX9MIcY = await DatrixoEquityTokenKWZYHpe.getShareholdersArray.call({from: accounts[1]});
		const uintZSzLZ0T = await DatrixoEquityTokenKWZYHpe.setStart.call(uintgbZsOpx, {from: accounts[4]});
		const uintpYzbM3 = await DatrixoEquityTokenKWZYHpe.setStart.call(uintntzS7k, {from: accounts[3]});
		await DatrixoEquityTokenKWZYHpe.afterStartTime.call({from: accounts[1]});
		const boolEujkcVR = await DatrixoEquityTokenKWZYHpe.removeShareholder.call(addressD2vRwT7, {from: accounts[1]});

		assert.equal(addressarrayVX9MIcY, )
		await expect(DatrixoEquityTokenKWZYHpe.setStart.call(uintgbZsOpx, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressBS9lcqd = accounts[4]
		const uintbno1Akg = BigInt("609")
		const DatrixoEquityTokenSmRQD3d = await DatrixoEquityToken.new(addressBS9lcqd, uintbno1Akg, {from: accounts[2]});
		const uintKDJK5At = BigInt("1020")
		const addressACbYMaD = accounts[4]
		const addressUfoQ1Qx = accounts[4]
		const uintQAKaAdo = BigInt("1699")
		const addressBRdZl9O = accounts[0]
		const booldNb7k53 = await DatrixoEquityTokenSmRQD3d.transferFrom.call(addressUfoQ1Qx, addressACbYMaD, uintKDJK5At, {from: accounts[4]});
		const boolXPq8nnm = await DatrixoEquityTokenSmRQD3d.transfer.call(addressBRdZl9O, uintQAKaAdo, {from: accounts[4]});

		assert.equal(boolXPq8nnm, true)
		assert.equal(booldNb7k53, true)
	});

	it('test for DatrixoEquityToken', async () => {
		const addressX3bNCnp = accounts[4]
		const uintABd0Bp3 = BigInt("609")
		const DatrixoEquityTokenSmRQD3d = await DatrixoEquityToken.new(addressX3bNCnp, uintABd0Bp3, {from: accounts[2]});
		const uintbzC0ENa = BigInt("1020")
		const addressqgX26Ww = accounts[3]
		const addressTZMJdCx = accounts[4]
		const uintBYulIAD = BigInt("1740")
		const addressanO241H = accounts[4]
		const addressMlvkbte = accounts[4]
		const uintdTfQq3 = BigInt("1689")
		const uintVrfPOHh = BigInt("1660")
		const addressVJmriih = accounts[1]
		const booldNb7k53 = await DatrixoEquityTokenSmRQD3d.transferFrom.call(addressTZMJdCx, addressqgX26Ww, uintbzC0ENa, {from: accounts[4]});
		const boolMLk4uS0 = await DatrixoEquityTokenSmRQD3d.transfer.call(addressanO241H, uintBYulIAD, {from: accounts[4]});
		await DatrixoEquityTokenSmRQD3d.onlyOwner.call({from: accounts[1]});
		const boolIrCCIh = await DatrixoEquityTokenSmRQD3d.removeShareholder.call(addressMlvkbte, {from: accounts[1]});
		const addressarrayVjexQTd = await DatrixoEquityTokenSmRQD3d.getShareholdersArray.call({from: accounts[1]});
		const uintLiVsXpa = await DatrixoEquityTokenSmRQD3d.setStart.call(uintdTfQq3, {from: accounts[1]});
		const boolXPq8nnm = await DatrixoEquityTokenSmRQD3d.transfer.call(addressVJmriih, uintVrfPOHh, {from: accounts[4]});
		const addressarrayblMCnVV = await DatrixoEquityTokenSmRQD3d.getShareholdersArray.call({from: accounts[0]});
		const addressarraywhnNjvq = await DatrixoEquityTokenSmRQD3d.getShareholdersArray.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(booldNb7k53, true)
		await expect(DatrixoEquityTokenSmRQD3d.transfer.call(addressanO241H, uintBYulIAD, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressQIn23i7 = accounts[4]
		const uint940eNA = BigInt("609")
		const DatrixoEquityTokenSmRQD3d = await DatrixoEquityToken.new(addressQIn23i7, uint940eNA, {from: accounts[2]});
		const uintCl4OXqP = BigInt("1013")
		const addressBtGEdsw = accounts[4]
		const addresskNQJS5K = accounts[4]
		const addressLbxBo0 = accounts[3]
		const booldNb7k53 = await DatrixoEquityTokenSmRQD3d.transferFrom.call(addresskNQJS5K, addressBtGEdsw, uintCl4OXqP, {from: accounts[4]});
		const boolWdDADX7 = await DatrixoEquityTokenSmRQD3d.removeShareholder.call(addressLbxBo0, {from: accounts[4]});

		assert.equal(booldNb7k53, true)
		await expect(DatrixoEquityTokenSmRQD3d.removeShareholder.call(addressLbxBo0, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DatrixoEquityToken', async () => {
		const addressAqY6n1 = accounts[4]
		const uintBAY5UYA = BigInt("609")
		const DatrixoEquityTokenSmRQD3d = await DatrixoEquityToken.new(addressAqY6n1, uintBAY5UYA, {from: accounts[2]});
		const uintPUqcSKj = BigInt("699")
		const uintiVf46FV = BigInt("1013")
		const addresszF22O0 = accounts[4]
		const addressFIHa3UY = accounts[4]
		const addressZr6deI1 = accounts[4]
		const uintPWq9mFr = await DatrixoEquityTokenSmRQD3d.setStart.call(uintPUqcSKj, {from: accounts[4]});
		const booldNb7k53 = await DatrixoEquityTokenSmRQD3d.transferFrom.call(addressFIHa3UY, addresszF22O0, uintiVf46FV, {from: accounts[4]});
		const addressarrayILQzpp5 = await DatrixoEquityTokenSmRQD3d.getShareholdersArray.call({from: "0x0000000000000000000000000000000000000001"});
		const addressarrayfqHIzmX = await DatrixoEquityTokenSmRQD3d.getShareholdersArray.call({from: accounts[2]});
		const boolWdDADX7 = await DatrixoEquityTokenSmRQD3d.removeShareholder.call(addressZr6deI1, {from: accounts[4]});

		await expect(DatrixoEquityTokenSmRQD3d.setStart.call(uintPUqcSKj, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})