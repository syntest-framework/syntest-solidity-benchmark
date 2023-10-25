const FreakCoin = artifacts.require("FreakCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FreakCoin', (accounts) => {
	it('test for FreakCoin', async () => {
		const FreakCoindmO1ih = await FreakCoin.new({from: accounts[3]});
		const addressAU6SHW = accounts[3]
		const addressxqznc1d = accounts[4]
		const uint256t2yTJhQ = await FreakCoindmO1ih.allUserBalances.call(addressAU6SHW, {from: accounts[3]});
		const uint256LB4gJGQ = await FreakCoindmO1ih.balanceOf.call(addressxqznc1d, {from: accounts[5]});
		const uint256NLwSghy = await FreakCoindmO1ih.totalSupply.call({from: accounts[2]});
		const uint256dsRqeac = await FreakCoindmO1ih.totalSupply.call({from: accounts[3]});

		assert.equal(uint256LB4gJGQ, BigInt("0"))
		assert.equal(uint256NLwSghy, BigInt("1000000"))
		assert.equal(uint256dsRqeac, BigInt("1000000"))
	});

	it('test for FreakCoin', async () => {
		const FreakCoinrwXB5To = await FreakCoin.new({from: accounts[4]});
		const addressnZswoxB = accounts[0]
		const addressOKMjRYY = accounts[2]
		const addressXRRnin4 = accounts[5]
		const uint256ExXfpx3 = await FreakCoinrwXB5To.allUserBalances.call(addressnZswoxB, {from: "0x0000000000000000000000000000000000000001"});
		const addressVlls9Hw = await FreakCoinrwXB5To.setUniswapAddress.call(addressOKMjRYY, {from: accounts[4]});
		const addresssGgsLZ = await FreakCoinrwXB5To.setUniswapAddress.call(addressXRRnin4, {from: accounts[3]});

		await expect(FreakCoinrwXB5To.allUserBalances.call(addressnZswoxB, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoincwbggpV = await FreakCoin.new({from: accounts[2]});
		const addressHy7UmA = accounts[1]
		const addressZQogd3O = "0x0000000000000000000000000000000000000001"
		const addresscsRtAg4 = accounts[2]
		const addressitlyDYq = await FreakCoincwbggpV.setUniswapAddress.call(addressHy7UmA, {from: accounts[3]});
		const uint256tj8rn1t = await FreakCoincwbggpV.balanceOf.call(addressZQogd3O, {from: accounts[2]});
		const addresskFRn6hC = await FreakCoincwbggpV.uniswapAddress.call({from: accounts[4]});
		const uint256zzpE1x = await FreakCoincwbggpV.allUserBalances.call(addresscsRtAg4, {from: accounts[2]});

		await expect(FreakCoincwbggpV.setUniswapAddress.call(addressHy7UmA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinw3YyNG = await FreakCoin.new({from: accounts[2]});
		const uintTOYXLOR = BigInt("46")
		const addressu2rQis1 = accounts[2]
		const uintMR6EpnK = BigInt("949")
		const addressbklcxtf = accounts[3]
		const boolE0KTGz3 = await FreakCoinw3YyNG.transfer.call(addressu2rQis1, uintTOYXLOR, {from: accounts[0]});
		const booloti4Rm5 = await FreakCoinw3YyNG.transfer.call(addressbklcxtf, uintMR6EpnK, {from: accounts[0]});

		await expect(FreakCoinw3YyNG.transfer.call(addressu2rQis1, uintTOYXLOR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinJ7XNjxQ = await FreakCoin.new({from: accounts[5]});
		const addressjjmXzpV = accounts[1]
		const uintdzMMWXM = BigInt("1594")
		const addressrDeOvU5 = accounts[2]
		const uint256MF89qo7 = await FreakCoinJ7XNjxQ.balanceOf.call(addressjjmXzpV, {from: accounts[2]});
		const boolqF4wtf = await FreakCoinJ7XNjxQ.approve.call(addressrDeOvU5, uintdzMMWXM, {from: accounts[2]});

		assert.equal(boolqF4wtf, true)
		assert.equal(uint256MF89qo7, BigInt("0"))
	});

	it('test for FreakCoin', async () => {
		const FreakCoinNedB5FQ = await FreakCoin.new({from: accounts[3]});
		const uintepQewX = BigInt("961")
		const address1NcK6G = accounts[2]
		const addresswMRusnV = await FreakCoinNedB5FQ.uniswapAddress.call({from: accounts[1]});
		const boolk59Qiia = await FreakCoinNedB5FQ.transfer.call(address1NcK6G, uintepQewX, {from: accounts[2]});
		const addressWYn70mz = await FreakCoinNedB5FQ.uniswapAddress.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addresswMRusnV, 0x0000000000000000000000000000000000000000)
		await expect(FreakCoinNedB5FQ.transfer.call(address1NcK6G, uintepQewX, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinYu6qzC1 = await FreakCoin.new({from: accounts[4]});
		const uintuAzxAv = BigInt("611")
		const addressreaQ5R = accounts[3]
		const addresseURZ3z = accounts[2]
		const uintijCmoNm = BigInt("1180")
		const address0iSvE6 = accounts[0]
		const addressDp7I2jf = await FreakCoinYu6qzC1.uniswapAddress.call({from: accounts[3]});
		const boolEoxLqY3 = await FreakCoinYu6qzC1.transferFrom.call(addresseURZ3z, addressreaQ5R, uintuAzxAv, {from: "0x0000000000000000000000000000000000000001"});
		const booljo7H6qm = await FreakCoinYu6qzC1.transfer.call(address0iSvE6, uintijCmoNm, {from: accounts[1]});

		assert.equal(addressDp7I2jf, 0x0000000000000000000000000000000000000000)
		await expect(FreakCoinYu6qzC1.transferFrom.call(addresseURZ3z, addressreaQ5R, uintuAzxAv, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinNedB5FQ = await FreakCoin.new({from: accounts[3]});
		const addressQ0ovTs = accounts[3]
		const uintr2RrfCx = BigInt("1996")
		const addressJM4HFQ7 = accounts[0]
		const uintGtEomPS = BigInt("961")
		const addressT1Dt2GZ = accounts[2]
		const uintv4wqvc = BigInt("1730")
		const addressAG3eF4I = accounts[2]
		const addresswMRusnV = await FreakCoinNedB5FQ.uniswapAddress.call({from: accounts[1]});
		const uint256uA0NpxG = await FreakCoinNedB5FQ.balanceOf.call(addressQ0ovTs, {from: accounts[1]});
		const boolXdGDKyh = await FreakCoinNedB5FQ.transfer.call(addressJM4HFQ7, uintr2RrfCx, {from: accounts[3]});
		const boolk59Qiia = await FreakCoinNedB5FQ.transfer.call(addressT1Dt2GZ, uintGtEomPS, {from: accounts[2]});
		const addressWYn70mz = await FreakCoinNedB5FQ.uniswapAddress.call({from: "0x0000000000000000000000000000000000000001"});
		const boolRJYTMp = await FreakCoinNedB5FQ.approve.call(addressAG3eF4I, uintv4wqvc, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addresswMRusnV, 0x0000000000000000000000000000000000000000)
		assert.equal(boolXdGDKyh, true)
		assert.equal(uint256uA0NpxG, BigInt("1000000"))
		await expect(FreakCoinNedB5FQ.transfer.call(addressT1Dt2GZ, uintGtEomPS, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinNedB5FQ = await FreakCoin.new({from: accounts[3]});
		const addressoNm3y7o = accounts[3]
		const uintg3PKSru = BigInt("957")
		const addresstZzOlMe = accounts[0]
		const addressC9kQeG2 = accounts[0]
		const addressJPUbdsY = accounts[3]
		const uinthuFlpPV = BigInt("1996")
		const addressNvX1JLG = accounts[0]
		const uintwYOcqmf = BigInt("961")
		const addressnWxQGm7 = accounts[2]
		const uintxhGvhQm = BigInt("845")
		const addressrfLnbLM = accounts[4]
		const addressBIQsNq8 = accounts[1]
		const addresswMRusnV = await FreakCoinNedB5FQ.uniswapAddress.call({from: accounts[1]});
		const uint256uA0NpxG = await FreakCoinNedB5FQ.balanceOf.call(addressoNm3y7o, {from: accounts[1]});
		const booljOuomMt = await FreakCoinNedB5FQ.approve.call(addresstZzOlMe, uintg3PKSru, {from: accounts[4]});
		const uint256HYhPDNJ = await FreakCoinNedB5FQ.allowance.call(addressJPUbdsY, addressC9kQeG2, {from: accounts[3]});
		const boolXdGDKyh = await FreakCoinNedB5FQ.transfer.call(addressNvX1JLG, uinthuFlpPV, {from: accounts[3]});
		const boolk59Qiia = await FreakCoinNedB5FQ.transfer.call(addressnWxQGm7, uintwYOcqmf, {from: accounts[2]});
		const addressWYn70mz = await FreakCoinNedB5FQ.uniswapAddress.call({from: "0x0000000000000000000000000000000000000001"});
		const boolXmvmmJ = await FreakCoinNedB5FQ.transferFrom.call(addressBIQsNq8, addressrfLnbLM, uintxhGvhQm, {from: accounts[0]});

		assert.equal(addresswMRusnV, 0x0000000000000000000000000000000000000000)
		assert.equal(boolXdGDKyh, true)
		assert.equal(booljOuomMt, true)
		assert.equal(uint256HYhPDNJ, BigInt("0"))
		assert.equal(uint256uA0NpxG, BigInt("1000000"))
		await expect(FreakCoinNedB5FQ.transfer.call(addressnWxQGm7, uintwYOcqmf, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoint28NOpS = await FreakCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintcmKKhU = BigInt("1067")
		const addressLffTaN5 = accounts[4]
		const addressRcUa5mL = accounts[4]
		const addressTKlR1KQ = await FreakCoint28NOpS.uniswapAddress.call({from: accounts[0]});
		const boolPmuJs4o = await FreakCoint28NOpS.approve.call(addressLffTaN5, uintcmKKhU, {from: accounts[0]});
		const addresszhnxa1q = await FreakCoint28NOpS.setUniswapAddress.call(addressRcUa5mL, {from: accounts[4]});
	});

	it('test for FreakCoin', async () => {
		const FreakCoinNedB5FQ = await FreakCoin.new({from: accounts[3]});
		const uintIFCY3RL = BigInt("1996")
		const addresszdVumhG = accounts[0]
		const uintt7qH4IY = BigInt("282")
		const addressbzxQVLg = accounts[3]
		const addresswMRusnV = await FreakCoinNedB5FQ.uniswapAddress.call({from: accounts[1]});
		const boolXdGDKyh = await FreakCoinNedB5FQ.transfer.call(addresszdVumhG, uintIFCY3RL, {from: accounts[3]});
		const boolVWC64YY = await FreakCoinNedB5FQ.transfer.call(addressbzxQVLg, uintt7qH4IY, {from: accounts[3]});

		assert.equal(addresswMRusnV, 0x0000000000000000000000000000000000000000)
		assert.equal(boolVWC64YY, true)
		assert.equal(boolXdGDKyh, true)
	});
})