const EdenCoin = artifacts.require("EdenCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EdenCoin', (accounts) => {
	it('test for EdenCoin', async () => {
		const EdenCoinA5GyUdb = await EdenCoin.new({from: accounts[1]});
		const uintV14xvS7 = BigInt("1291")
		const addressc9xS3Zm = accounts[4]
		const uintkH5vOE4 = BigInt("1061")
		const addressRpcg0Y = accounts[4]
		const addresshEwD8RP = accounts[3]
		const addressDciBRA0 = accounts[2]
		const boolOjlVajc = await EdenCoinA5GyUdb.increaseApproval.call(addressc9xS3Zm, uintV14xvS7, {from: accounts[2]});
		const boolGMlDys3 = await EdenCoinA5GyUdb.transfer.call(addressRpcg0Y, uintkH5vOE4, {from: accounts[2]});
		const uint256DnondO = await EdenCoinA5GyUdb.allowance.call(addressDciBRA0, addresshEwD8RP, {from: accounts[1]});

		assert.equal(boolOjlVajc, true)
		await expect(EdenCoinA5GyUdb.transfer.call(addressRpcg0Y, uintkH5vOE4, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinCBXQG8 = await EdenCoin.new({from: accounts[2]});
		const uintUjOmdA = BigInt("1907")
		const addressP8IU66 = accounts[3]
		const uintVC4vqYl = BigInt("2020")
		const addressuYdsvkM = accounts[2]
		const uintIH71HX6 = BigInt("539")
		const addressY6WvNa = accounts[4]
		const uintCRpvDpV = BigInt("247")
		const addressCOOsUHJ = accounts[0]
		const boolq9AEeZY = await EdenCoinCBXQG8.approve.call(addressP8IU66, uintUjOmdA, {from: accounts[4]});
		const boolu9nFPNb = await EdenCoinCBXQG8.increaseApproval.call(addressuYdsvkM, uintVC4vqYl, {from: accounts[2]});
		const boolKedII0T = await EdenCoinCBXQG8.transfer.call(addressY6WvNa, uintIH71HX6, {from: accounts[1]});
		const boolpeE8pZW = await EdenCoinCBXQG8.decreaseApproval.call(addressCOOsUHJ, uintCRpvDpV, {from: accounts[4]});

		assert.equal(boolq9AEeZY, true)
		assert.equal(boolu9nFPNb, true)
		await expect(EdenCoinCBXQG8.transfer.call(addressY6WvNa, uintIH71HX6, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinCF2alV5 = await EdenCoin.new({from: accounts[2]});
		const addresshDE4mar = accounts[0]
		const uintCz3Xao5 = BigInt("1136")
		const addressrsEv4Vs = "0x0000000000000000000000000000000000000001"
		const uintAN4A1Ig = BigInt("1069")
		const addressxKbmlkf = accounts[2]
		const uint256cIDPu51 = await EdenCoinCF2alV5.balanceOf.call(addresshDE4mar, {from: accounts[2]});
		const boolUH42Ktc = await EdenCoinCF2alV5.approve.call(addressrsEv4Vs, uintCz3Xao5, {from: "0x0000000000000000000000000000000000000001"});
		const boolqLP7JuP = await EdenCoinCF2alV5.decreaseApproval.call(addressxKbmlkf, uintAN4A1Ig, {from: accounts[2]});

		assert.equal(boolUH42Ktc, true)
		assert.equal(boolqLP7JuP, true)
		assert.equal(uint256cIDPu51, BigInt("0"))
	});

	it('test for EdenCoin', async () => {
		const EdenCoinWUVMGZe = await EdenCoin.new({from: accounts[4]});
		const uintoUh6eue = BigInt("459")
		const addresskVnhwNz = accounts[4]
		const addressspC5Sm3 = accounts[3]
		const uintnIfBal0 = BigInt("780")
		const address5dNI3y = accounts[0]
		const addressrlzt21h = accounts[0]
		const boolzb7GrXw = await EdenCoinWUVMGZe.transferFrom.call(addressspC5Sm3, addresskVnhwNz, uintoUh6eue, {from: accounts[3]});
		const boolpv0AiZR = await EdenCoinWUVMGZe.approve.call(address5dNI3y, uintnIfBal0, {from: accounts[2]});
		const uint256XGxYrN = await EdenCoinWUVMGZe.balanceOf.call(addressrlzt21h, {from: accounts[0]});

		await expect(EdenCoinWUVMGZe.transferFrom.call(addressspC5Sm3, addresskVnhwNz, uintoUh6eue, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinGM6bmRI = await EdenCoin.new({from: accounts[2]});
		const uintxGPYOfT = BigInt("473")
		const addressctexELR = accounts[2]
		const addressysTTaWR = accounts[2]
		const addressjzbRs7l = accounts[4]
		const uints5lJZuR = BigInt("1304")
		const addressku7HJe7 = accounts[1]
		const uintB1zTeH1 = BigInt("704")
		const addressvNKnOnK = "0x0000000000000000000000000000000000000001"
		const addressryQwlg3 = "0x0000000000000000000000000000000000000001"
		const addressjWsBn2P = accounts[2]
		const addressueQSSox = accounts[2]
		const addressIpTHjsO = accounts[2]
		const addressYiWDwOw = accounts[3]
		const boolfNgipj3 = await EdenCoinGM6bmRI.increaseApproval.call(addressctexELR, uintxGPYOfT, {from: accounts[1]});
		const uint256N6RUzvb = await EdenCoinGM6bmRI.allowance.call(addressjzbRs7l, addressysTTaWR, {from: accounts[3]});
		const boolepf6qM0 = await EdenCoinGM6bmRI.transfer.call(addressku7HJe7, uints5lJZuR, {from: accounts[3]});
		const boolelzyIc = await EdenCoinGM6bmRI.transferFrom.call(addressryQwlg3, addressvNKnOnK, uintB1zTeH1, {from: accounts[5]});
		const uint256WTWF1sp = await EdenCoinGM6bmRI.allowance.call(addressueQSSox, addressjWsBn2P, {from: accounts[1]});
		const uint256CR4UKk9 = await EdenCoinGM6bmRI.allowance.call(addressYiWDwOw, addressIpTHjsO, {from: accounts[1]});

		assert.equal(boolfNgipj3, true)
		assert.equal(uint256N6RUzvb, BigInt("0"))
		await expect(EdenCoinGM6bmRI.transfer.call(addressku7HJe7, uints5lJZuR, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinORoHBrg = await EdenCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const addressMJ9TW5r = accounts[5]
		const addressG2LxstY = accounts[4]
		const uintgsSUcWp = BigInt("128")
		const addressNcE3iAQ = accounts[2]
		const uintt6w7GVA = BigInt("638")
		const addressC8od1Bq = accounts[1]
		const uint256xIXlBqN = await EdenCoinORoHBrg.allowance.call(addressG2LxstY, addressMJ9TW5r, {from: accounts[1]});
		const boolq5YQHNj = await EdenCoinORoHBrg.decreaseApproval.call(addressNcE3iAQ, uintgsSUcWp, {from: accounts[4]});
		const boolb3Sicr = await EdenCoinORoHBrg.transfer.call(addressC8od1Bq, uintt6w7GVA, {from: accounts[1]});
	});

	it('test for EdenCoin', async () => {
		const EdenCoinWUVMGZe = await EdenCoin.new({from: accounts[4]});
		const uintwNpjZTq = BigInt("459")
		const address8m9xdE = accounts[4]
		const addresszd468LN = accounts[4]
		const addressalZHQge = accounts[0]
		const boolzb7GrXw = await EdenCoinWUVMGZe.transferFrom.call(addresszd468LN, address8m9xdE, uintwNpjZTq, {from: accounts[3]});
		const uint256XGxYrN = await EdenCoinWUVMGZe.balanceOf.call(addressalZHQge, {from: accounts[0]});

		await expect(EdenCoinWUVMGZe.transferFrom.call(addresszd468LN, address8m9xdE, uintwNpjZTq, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinA5GyUdb = await EdenCoin.new({from: accounts[1]});
		const uintoudhTlE = BigInt("1283")
		const addressIMcXhpz = accounts[4]
		const uintbMkGy8 = BigInt("1603")
		const addressc3RtnoK = accounts[1]
		const uintnasrXsm = BigInt("1061")
		const addressNHVyMft = accounts[4]
		const addressrFVuT3m = accounts[3]
		const addressXGk6GXK = accounts[2]
		const boolOjlVajc = await EdenCoinA5GyUdb.increaseApproval.call(addressIMcXhpz, uintoudhTlE, {from: accounts[2]});
		const boolf1SZQj3 = await EdenCoinA5GyUdb.transfer.call(addressc3RtnoK, uintbMkGy8, {from: accounts[1]});
		const boolGMlDys3 = await EdenCoinA5GyUdb.transfer.call(addressNHVyMft, uintnasrXsm, {from: accounts[2]});
		const uint256DnondO = await EdenCoinA5GyUdb.allowance.call(addressXGk6GXK, addressrFVuT3m, {from: accounts[1]});

		assert.equal(boolOjlVajc, true)
		assert.equal(boolf1SZQj3, true)
		await expect(EdenCoinA5GyUdb.transfer.call(addressNHVyMft, uintnasrXsm, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinN5TgyF6 = await EdenCoin.new({from: accounts[2]});
		const addressUHXCQgc = "0x00000000000000000000000000000000000000-1"
		const uintRsqNqD6 = BigInt("378")
		const addresseTYuJRF = accounts[1]
		const addressutHEyN = accounts[0]
		const uintqHEvT9 = BigInt("343")
		const addressYLwHAG7 = accounts[3]
		const uint256a8Lciwk = await EdenCoinN5TgyF6.balanceOf.call(addressUHXCQgc, {from: accounts[3]});
		const boolGPt1hb2 = await EdenCoinN5TgyF6.decreaseApproval.call(addresseTYuJRF, uintRsqNqD6, {from: accounts[5]});
		const uint256hruwUNC = await EdenCoinN5TgyF6.balanceOf.call(addressutHEyN, {from: accounts[4]});
		const boollGmmsxL = await EdenCoinN5TgyF6.transfer.call(addressYLwHAG7, uintqHEvT9, {from: accounts[2]});

		await expect(EdenCoinN5TgyF6.balanceOf.call(addressUHXCQgc, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinN5TgyF6 = await EdenCoin.new({from: accounts[2]});
		const uintdmMVjhL = BigInt("0")
		const addresstJ6jXSH = "0x0000000000000000000000000000000000000001"
		const uintsSJwwYY = BigInt("138")
		const addressedCA1D8 = accounts[2]
		const uinthDBoppN = BigInt("778")
		const addressmjjPm3s = accounts[1]
		const uintLmIG6Lh = BigInt("694")
		const addressPKQ4e4r = accounts[2]
		const addressja1UGIq = accounts[2]
		const uintmIjKVWF = BigInt("1638")
		const addressEqQBe3 = "0x0000000000000000000000000000000000000001"
		const uintx5ei75x = BigInt("167")
		const addressDCuIba = accounts[2]
		const boolcLjKzof = await EdenCoinN5TgyF6.decreaseApproval.call(addresstJ6jXSH, uintdmMVjhL, {from: accounts[5]});
		const boolGPt1hb2 = await EdenCoinN5TgyF6.decreaseApproval.call(addressedCA1D8, uintsSJwwYY, {from: accounts[5]});
		const boolSSmlmG4 = await EdenCoinN5TgyF6.approve.call(addressmjjPm3s, uinthDBoppN, {from: "0x0000000000000000000000000000000000000001"});
		const boolAYfHzTv = await EdenCoinN5TgyF6.transferFrom.call(addressja1UGIq, addressPKQ4e4r, uintLmIG6Lh, {from: accounts[2]});
		const boolWbqXKOU = await EdenCoinN5TgyF6.approve.call(addressEqQBe3, uintmIjKVWF, {from: accounts[3]});
		const boolpj22Vxp = await EdenCoinN5TgyF6.transfer.call(addressDCuIba, uintx5ei75x, {from: accounts[1]});

		assert.equal(boolGPt1hb2, true)
		assert.equal(boolSSmlmG4, true)
		assert.equal(boolcLjKzof, true)
		await expect(EdenCoinN5TgyF6.transferFrom.call(addressja1UGIq, addressPKQ4e4r, uintLmIG6Lh, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})