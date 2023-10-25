const EdenCoin = artifacts.require("EdenCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EdenCoin', (accounts) => {
	it('test for EdenCoin', async () => {
		const EdenCoinH6yuCTL = await EdenCoin.new({from: accounts[1]});
		const uintbm5NPd = BigInt("528")
		const addressWcrc9H4 = accounts[3]
		const addressJ7tTt1e = accounts[4]
		const addresswNq6bP8 = accounts[4]
		const addressjCZTfW0 = accounts[4]
		const boolqEXAj5c = await EdenCoinH6yuCTL.transferFrom.call(addressJ7tTt1e, addressWcrc9H4, uintbm5NPd, {from: accounts[3]});
		const uint256hZV6Pn8 = await EdenCoinH6yuCTL.allowance.call(addressjCZTfW0, addresswNq6bP8, {from: accounts[3]});

		await expect(EdenCoinH6yuCTL.transferFrom.call(addressJ7tTt1e, addressWcrc9H4, uintbm5NPd, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinvI8agSA = await EdenCoin.new({from: accounts[2]});
		const uintQ6AtShU = BigInt("1701")
		const addressGsIYTbz = accounts[1]
		const uintuxCkisV = BigInt("1078")
		const addresstKeULpQ = accounts[2]
		const addressM0NBUvZ = accounts[1]
		const addressb2tnN4 = accounts[1]
		const addressAqDgLhE = accounts[3]
		const boolOTP73HA = await EdenCoinvI8agSA.approve.call(addressGsIYTbz, uintQ6AtShU, {from: accounts[1]});
		const boolBt54FMa = await EdenCoinvI8agSA.transferFrom.call(addressM0NBUvZ, addresstKeULpQ, uintuxCkisV, {from: accounts[2]});
		const uint256Yx7B3wM = await EdenCoinvI8agSA.allowance.call(addressAqDgLhE, addressb2tnN4, {from: accounts[2]});

		assert.equal(boolOTP73HA, true)
		await expect(EdenCoinvI8agSA.transferFrom.call(addressM0NBUvZ, addresstKeULpQ, uintuxCkisV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinHLRS4t2 = await EdenCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintNtbqoSh = BigInt("1929")
		const addresskXQfpAh = accounts[0]
		const uintNORt9ET = BigInt("1735")
		const addressJScuirb = "0x0000000000000000000000000000000000000001"
		const uintY9N8iWF = BigInt("1008")
		const addressjZcKcZQ = accounts[0]
		const uintlah4gj9 = BigInt("22")
		const addressJxS4XGj = accounts[3]
		const uintIZWx0bn = BigInt("2034")
		const addressFnXnfVQ = accounts[1]
		const addressrFhNumy = accounts[0]
		const boolXQZDTas = await EdenCoinHLRS4t2.transfer.call(addresskXQfpAh, uintNtbqoSh, {from: "0x0000000000000000000000000000000000000001"});
		const boolGWpGzmi = await EdenCoinHLRS4t2.transfer.call(addressJScuirb, uintNORt9ET, {from: accounts[0]});
		const boolm1FFItE = await EdenCoinHLRS4t2.increaseApproval.call(addressjZcKcZQ, uintY9N8iWF, {from: accounts[1]});
		const boolCxzk78y = await EdenCoinHLRS4t2.increaseApproval.call(addressJxS4XGj, uintlah4gj9, {from: accounts[2]});
		const boolEEZba1S = await EdenCoinHLRS4t2.transferFrom.call(addressrFhNumy, addressFnXnfVQ, uintIZWx0bn, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for EdenCoin', async () => {
		const EdenCoinkywUVgm = await EdenCoin.new({from: accounts[3]});
		const uintlNIKvYe = BigInt("1964")
		const addressCI0jjlm = accounts[2]
		const uintOwyfnwU = BigInt("295")
		const addressWtUdaSi = accounts[3]
		const addressn5LYoN4 = accounts[0]
		const addressb7WiYDI = accounts[2]
		const addressV8FcxIM = accounts[0]
		const uintkwROueF = BigInt("532")
		const addresseMXBUyU = accounts[2]
		const uint0OyVh3 = BigInt("1690")
		const addressD1CdCi3 = accounts[1]
		const uintKajvsT0 = BigInt("621")
		const addressTjY1gS = accounts[3]
		const addressXE0eM3G = accounts[2]
		const booltItdMt = await EdenCoinkywUVgm.increaseApproval.call(addressCI0jjlm, uintlNIKvYe, {from: accounts[0]});
		const boolP5QL6DS = await EdenCoinkywUVgm.transferFrom.call(addressn5LYoN4, addressWtUdaSi, uintOwyfnwU, {from: accounts[1]});
		const uint256dfRZ5sS = await EdenCoinkywUVgm.allowance.call(addressV8FcxIM, addressb7WiYDI, {from: accounts[0]});
		const boolDRNzoGw = await EdenCoinkywUVgm.increaseApproval.call(addresseMXBUyU, uintkwROueF, {from: accounts[4]});
		const boolA7SlxO = await EdenCoinkywUVgm.increaseApproval.call(addressD1CdCi3, uint0OyVh3, {from: accounts[2]});
		const boolpU4C68 = await EdenCoinkywUVgm.transferFrom.call(addressXE0eM3G, addressTjY1gS, uintKajvsT0, {from: accounts[5]});

		assert.equal(booltItdMt, true)
		await expect(EdenCoinkywUVgm.transferFrom.call(addressn5LYoN4, addressWtUdaSi, uintOwyfnwU, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinFwsQx0e = await EdenCoin.new({from: accounts[2]});
		const uintc0AyrNG = BigInt("355")
		const addresstBZpRYW = accounts[4]
		const uintSrkZ1Ab = BigInt("1079")
		const addressxPfctAH = accounts[0]
		const uintmGllBnT = BigInt("249")
		const addressEO3wMBn = accounts[3]
		const uintnoHjcfH = BigInt("480")
		const addressLLVNzI = accounts[3]
		const addresswofEXsI = accounts[1]
		const booltqEiAkB = await EdenCoinFwsQx0e.transfer.call(addresstBZpRYW, uintc0AyrNG, {from: accounts[3]});
		const booltdd1OxI = await EdenCoinFwsQx0e.approve.call(addressxPfctAH, uintSrkZ1Ab, {from: accounts[3]});
		const boolMl0zCxw = await EdenCoinFwsQx0e.increaseApproval.call(addressEO3wMBn, uintmGllBnT, {from: accounts[1]});
		const boolMUdAKh1 = await EdenCoinFwsQx0e.increaseApproval.call(addressLLVNzI, uintnoHjcfH, {from: accounts[4]});
		const uint256qnrPDaw = await EdenCoinFwsQx0e.balanceOf.call(addresswofEXsI, {from: accounts[0]});

		await expect(EdenCoinFwsQx0e.transfer.call(addresstBZpRYW, uintc0AyrNG, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoin9VKYSx = await EdenCoin.new({from: accounts[0]});
		const addressYZBxjj4 = accounts[5]
		const addresslR4w9W = "0x0000000000000000000000000000000000000001"
		const uintmqDbFQe = BigInt("285")
		const addressLWmnKQc = accounts[1]
		const addressmSEONgp = accounts[3]
		const uintZFXpIaP = BigInt("1547")
		const addressc36xxfp = accounts[5]
		const addressRQHkQB4 = accounts[3]
		const addressYQAXvFH = accounts[0]
		const uint256hgOZukS = await EdenCoin9VKYSx.allowance.call(addresslR4w9W, addressYZBxjj4, {from: accounts[0]});
		const booldTZl0D8 = await EdenCoin9VKYSx.transferFrom.call(addressmSEONgp, addressLWmnKQc, uintmqDbFQe, {from: accounts[1]});
		const boolCx8mOSO = await EdenCoin9VKYSx.transfer.call(addressc36xxfp, uintZFXpIaP, {from: accounts[5]});
		const uint256KxXjwD1 = await EdenCoin9VKYSx.allowance.call(addressYQAXvFH, addressRQHkQB4, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256hgOZukS, BigInt("0"))
		await expect(EdenCoin9VKYSx.transferFrom.call(addressmSEONgp, addressLWmnKQc, uintmqDbFQe, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinsLQx3Ef = await EdenCoin.new({from: accounts[2]});
		const addressE6Bz8p = accounts[1]
		const addressAzrG8Kp = accounts[0]
		const addressVlM6blv = accounts[4]
		const addressxEQ9YX = accounts[4]
		const uintQu8qHcW = BigInt("1594")
		const addressaTXDBCH = "0x0000000000000000000000000000000000000001"
		const uintWWWhhTn = BigInt("494")
		const addressggSnxS = accounts[3]
		const addressrRj511 = accounts[2]
		const uintkC3Ylip = BigInt("196")
		const addressiV8en9f = accounts[0]
		const uintAwLduo = BigInt("1155")
		const addressCQyQtA = accounts[0]
		const uint256jYHOIT = await EdenCoinsLQx3Ef.allowance.call(addressAzrG8Kp, addressE6Bz8p, {from: accounts[2]});
		const uint256UT84Iq7 = await EdenCoinsLQx3Ef.allowance.call(addressxEQ9YX, addressVlM6blv, {from: accounts[5]});
		const boolzMfktUV = await EdenCoinsLQx3Ef.increaseApproval.call(addressaTXDBCH, uintQu8qHcW, {from: accounts[0]});
		const boolt9iL9w1 = await EdenCoinsLQx3Ef.transferFrom.call(addressrRj511, addressggSnxS, uintWWWhhTn, {from: accounts[4]});
		const boolAvWduPn = await EdenCoinsLQx3Ef.approve.call(addressiV8en9f, uintkC3Ylip, {from: accounts[4]});
		const boolKN16OlZ = await EdenCoinsLQx3Ef.approve.call(addressCQyQtA, uintAwLduo, {from: accounts[3]});

		assert.equal(boolzMfktUV, true)
		assert.equal(uint256UT84Iq7, BigInt("0"))
		assert.equal(uint256jYHOIT, BigInt("0"))
		await expect(EdenCoinsLQx3Ef.transferFrom.call(addressrRj511, addressggSnxS, uintWWWhhTn, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinH6yuCTL = await EdenCoin.new({from: accounts[1]});
		const uinteUgJgNQ = BigInt("728")
		const addresst58aliK = accounts[0]
		const uintnriQ6Ut = BigInt("807")
		const addressDCuxABB = accounts[2]
		const uinty4qa2Qt = BigInt("528")
		const addressf9Q1P7G = accounts[4]
		const addressD7GUySc = accounts[4]
		const addressLuCY4dv = accounts[4]
		const addressNVMzB0c = accounts[0]
		const addressmoGNCGn = accounts[4]
		const addressN7Pvru7 = accounts[4]
		const boolMTtOosa = await EdenCoinH6yuCTL.increaseApproval.call(addresst58aliK, uinteUgJgNQ, {from: accounts[3]});
		const boolh4MvYxT = await EdenCoinH6yuCTL.decreaseApproval.call(addressDCuxABB, uintnriQ6Ut, {from: accounts[3]});
		const boolqEXAj5c = await EdenCoinH6yuCTL.transferFrom.call(addressD7GUySc, addressf9Q1P7G, uinty4qa2Qt, {from: accounts[3]});
		const uint256r8Yr2X = await EdenCoinH6yuCTL.allowance.call(addressNVMzB0c, addressLuCY4dv, {from: accounts[0]});
		const uint256hZV6Pn8 = await EdenCoinH6yuCTL.allowance.call(addressN7Pvru7, addressmoGNCGn, {from: accounts[3]});

		assert.equal(boolMTtOosa, true)
		assert.equal(boolh4MvYxT, true)
		await expect(EdenCoinH6yuCTL.transferFrom.call(addressD7GUySc, addressf9Q1P7G, uinty4qa2Qt, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinH6yuCTL = await EdenCoin.new({from: accounts[1]});
		const uintzlf4Lge = BigInt("1495")
		const addressF9Zx9x = accounts[3]
		const uinthvH6PX1 = BigInt("1392")
		const addressMJml0uO = accounts[2]
		const uintoHlYoRb = BigInt("528")
		const addressK1v8F1B = accounts[3]
		const addressZxH5t7y = accounts[4]
		const addressXTRBjeV = accounts[4]
		const addresswxWv1T0 = accounts[5]
		const boolRMKaniS = await EdenCoinH6yuCTL.decreaseApproval.call(addressF9Zx9x, uintzlf4Lge, {from: accounts[3]});
		const boolhXJTnnk = await EdenCoinH6yuCTL.transfer.call(addressMJml0uO, uinthvH6PX1, {from: accounts[1]});
		const boolqEXAj5c = await EdenCoinH6yuCTL.transferFrom.call(addressZxH5t7y, addressK1v8F1B, uintoHlYoRb, {from: accounts[3]});
		const uint256hZV6Pn8 = await EdenCoinH6yuCTL.allowance.call(addresswxWv1T0, addressXTRBjeV, {from: accounts[3]});

		assert.equal(boolRMKaniS, true)
		assert.equal(boolhXJTnnk, true)
		await expect(EdenCoinH6yuCTL.transferFrom.call(addressZxH5t7y, addressK1v8F1B, uintoHlYoRb, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinKVIHnSw = await EdenCoin.new({from: accounts[0]});
		const addressZePd3MK = accounts[5]
		const addressnF3uc34 = accounts[0]
		const addresstLQMj0u = accounts[3]
		const uint256WDgE0vP = await EdenCoinKVIHnSw.balanceOf.call(addressZePd3MK, {from: accounts[3]});
		const uint256jfhROKy = await EdenCoinKVIHnSw.allowance.call(addresstLQMj0u, addressnF3uc34, {from: accounts[1]});

		assert.equal(uint256WDgE0vP, BigInt("0"))
		assert.equal(uint256jfhROKy, BigInt("0"))
	});

	it('test for EdenCoin', async () => {
		const EdenCoinH6yuCTL = await EdenCoin.new({from: accounts[1]});
		const uintVRQMjTc = BigInt("0")
		const addresstnkjNTe = accounts[0]
		const boolItRHgi = await EdenCoinH6yuCTL.decreaseApproval.call(addresstnkjNTe, uintVRQMjTc, {from: accounts[4]});

		assert.equal(boolItRHgi, true)
	});
})