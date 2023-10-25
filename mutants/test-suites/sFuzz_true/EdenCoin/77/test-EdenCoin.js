const EdenCoin = artifacts.require("EdenCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EdenCoin', (accounts) => {
	it('test for EdenCoin', async () => {
		const EdenCoinZBEyfRo = await EdenCoin.new({from: accounts[4]});
		const uintTUYHqwR = BigInt("1316")
		const addressQNDLRNV = accounts[5]
		const addressb2H58I = accounts[4]
		const addressUB4FKF7 = accounts[1]
		const uintpnMAlAa = BigInt("1896")
		const addressqsL07N9 = accounts[3]
//		const booldNayItQ = await EdenCoinZBEyfRo.transfer.call(addressQNDLRNV, uintTUYHqwR, {from: accounts[2]});
//		const uint256twm12qW = await EdenCoinZBEyfRo.allowance.call(addressUB4FKF7, addressb2H58I, {from: accounts[3]});
//		const booluJzTEvs = await EdenCoinZBEyfRo.transfer.call(addressqsL07N9, uintpnMAlAa, {from: accounts[2]});

		await expect(EdenCoinZBEyfRo.transfer.call(addressQNDLRNV, uintTUYHqwR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoiny0eMMhN = await EdenCoin.new({from: accounts[3]});
		const uintQJJTihD = BigInt("1313")
		const addressNyJ9kk0 = accounts[3]
		const addressy6FbGjk = accounts[1]
		const addressxxfthA = accounts[0]
		const uintsrTawLk = BigInt("950")
		const addressmzoHJBa = accounts[0]
		const addresscp6FHrb = accounts[0]
		const uint7iMTUt = BigInt("1852")
		const addressL5uRs8l = "0x0000000000000000000000000000000000000001"
		const boolcMLKoYS = await EdenCoiny0eMMhN.approve.call(addressNyJ9kk0, uintQJJTihD, {from: accounts[1]});
		const uint256sG3aKxi = await EdenCoiny0eMMhN.allowance.call(addressxxfthA, addressy6FbGjk, {from: accounts[4]});
//		const boolE5eZWCw = await EdenCoiny0eMMhN.transfer.call(addressmzoHJBa, uintsrTawLk, {from: accounts[2]});
//		const uint256zSK4erI = await EdenCoiny0eMMhN.balanceOf.call(addresscp6FHrb, {from: accounts[0]});
//		const booltFYESbw = await EdenCoiny0eMMhN.increaseApproval.call(addressL5uRs8l, uint7iMTUt, {from: accounts[0]});

		assert.equal(boolcMLKoYS, true)
		assert.equal(uint256sG3aKxi, BigInt("0"))
		await expect(EdenCoiny0eMMhN.transfer.call(addressmzoHJBa, uintsrTawLk, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinzZc5Zhs = await EdenCoin.new({from: accounts[4]});
		const uintErouZ4g = BigInt("818")
		const addressVrwFCM2 = accounts[4]
		const uinteViFpl2 = BigInt("559")
		const addresso2DVAyF = accounts[4]
		const addressiUnvDk7 = accounts[2]
		const addressih0dbas = "0x0000000000000000000000000000000000000001"
		const addressQWDPTH = accounts[5]
		const uintweaaPM = BigInt("431")
		const addressWDXrioj = accounts[4]
		const uintNfRNKq2 = BigInt("665")
		const addressyMQldJ = accounts[1]
		const boolyAFanXJ = await EdenCoinzZc5Zhs.approve.call(addressVrwFCM2, uintErouZ4g, {from: "0x0000000000000000000000000000000000000001"});
//		const boolyrn85AJ = await EdenCoinzZc5Zhs.transferFrom.call(addressiUnvDk7, addresso2DVAyF, uinteViFpl2, {from: accounts[2]});
//		const uint256cSwqZUG = await EdenCoinzZc5Zhs.allowance.call(addressQWDPTH, addressih0dbas, {from: accounts[3]});
//		const boolAKZnLQZ = await EdenCoinzZc5Zhs.increaseApproval.call(addressWDXrioj, uintweaaPM, {from: accounts[1]});
//		const boolfJPJHN3 = await EdenCoinzZc5Zhs.transfer.call(addressyMQldJ, uintNfRNKq2, {from: accounts[1]});

		assert.equal(boolyAFanXJ, true)
		await expect(EdenCoinzZc5Zhs.transferFrom.call(addressiUnvDk7, addresso2DVAyF, uinteViFpl2, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinyaHEz5u = await EdenCoin.new({from: accounts[2]});
		const addressi1YcIBr = accounts[4]
		const uintged6cQ = BigInt("2036")
		const addressIjnK5ea = accounts[2]
		const addressjHyNzMb = accounts[0]
		const uintqyD12Vt = BigInt("994")
		const addressC2ag5Qw = accounts[2]
		const addressAvDiHy4 = accounts[1]
		const addressh2tENKH = accounts[1]
		const addressYto9a3p = accounts[2]
		const addressWHruZcH = accounts[3]
		const uint256VgogVdO = await EdenCoinyaHEz5u.balanceOf.call(addressi1YcIBr, {from: accounts[5]});
//		const boolhgzfsfx = await EdenCoinyaHEz5u.transferFrom.call(addressjHyNzMb, addressIjnK5ea, uintged6cQ, {from: accounts[2]});
//		const boolfhv6DSd = await EdenCoinyaHEz5u.transferFrom.call(addressAvDiHy4, addressC2ag5Qw, uintqyD12Vt, {from: accounts[4]});
//		const uint256vZUlvgD = await EdenCoinyaHEz5u.allowance.call(addressYto9a3p, addressh2tENKH, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256b7JrYrB = await EdenCoinyaHEz5u.balanceOf.call(addressWHruZcH, {from: accounts[4]});

		assert.equal(uint256VgogVdO, BigInt("0"))
		await expect(EdenCoinyaHEz5u.transferFrom.call(addressjHyNzMb, addressIjnK5ea, uintged6cQ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinuw1Nqc6 = await EdenCoin.new({from: accounts[2]});
		const uintiCVT2E = BigInt("1907")
		const addressY4syQ9 = accounts[0]
		const uintrWlg1jE = BigInt("1465")
		const addressbzg5AvI = "0x0000000000000000000000000000000000000001"
		const uintMPPQICQ = BigInt("692")
		const addressxA263z = accounts[1]
		const addressePRU8kl = accounts[2]
		const addressIuxn88f = accounts[0]
		const addresspebPrsf = accounts[4]
		const boolgQNQhsH = await EdenCoinuw1Nqc6.approve.call(addressY4syQ9, uintiCVT2E, {from: accounts[0]});
		const boolN3iWU3w = await EdenCoinuw1Nqc6.approve.call(addressbzg5AvI, uintrWlg1jE, {from: accounts[0]});
//		const boolvST7gHU = await EdenCoinuw1Nqc6.transferFrom.call(addressePRU8kl, addressxA263z, uintMPPQICQ, {from: accounts[3]});
//		const uint256IQ3tL45 = await EdenCoinuw1Nqc6.allowance.call(addresspebPrsf, addressIuxn88f, {from: accounts[4]});

		assert.equal(boolN3iWU3w, true)
		assert.equal(boolgQNQhsH, true)
		await expect(EdenCoinuw1Nqc6.transferFrom.call(addressePRU8kl, addressxA263z, uintMPPQICQ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinn7Bx8x = await EdenCoin.new({from: accounts[0]});
		const uintU5BP9Ld = BigInt("904")
		const addressXHn8Uyw = accounts[3]
		const uinty2qMSXg = BigInt("956")
		const addresspxIPOet = accounts[4]
		const addressO49iXoR = accounts[0]
		const addressS5JTKgW = accounts[2]
		const boolVRn7EJG = await EdenCoinn7Bx8x.increaseApproval.call(addressXHn8Uyw, uintU5BP9Ld, {from: accounts[0]});
		const boolWKMGxNd = await EdenCoinn7Bx8x.approve.call(addresspxIPOet, uinty2qMSXg, {from: accounts[2]});
		const uint256b4417fx = await EdenCoinn7Bx8x.allowance.call(addressS5JTKgW, addressO49iXoR, {from: accounts[5]});

		assert.equal(boolVRn7EJG, true)
		assert.equal(boolWKMGxNd, true)
		assert.equal(uint256b4417fx, BigInt("0"))
	});

	it('test for EdenCoin', async () => {
		const EdenCoinQWJgUH = await EdenCoin.new({from: accounts[2]});
		const uintP6vzVNZ = BigInt("1781")
		const addresswa7lI4O = accounts[1]
		const uintEmQXYP9 = BigInt("711")
		const addressaLxG6Ld = accounts[5]
		const uintylxwisZ = BigInt("413")
		const addressIaH0QPw = "0x0000000000000000000000000000000000000001"
		const uintpWnBK3n = BigInt("198")
		const addresssiVpucq = accounts[1]
		const boolbnkzazo = await EdenCoinQWJgUH.increaseApproval.call(addresswa7lI4O, uintP6vzVNZ, {from: accounts[2]});
		const boolN7JXYvF = await EdenCoinQWJgUH.increaseApproval.call(addressaLxG6Ld, uintEmQXYP9, {from: accounts[0]});
		const boolWffEnr = await EdenCoinQWJgUH.approve.call(addressIaH0QPw, uintylxwisZ, {from: accounts[0]});
		const boolmibCY2t = await EdenCoinQWJgUH.decreaseApproval.call(addresssiVpucq, uintpWnBK3n, {from: accounts[0]});

		assert.equal(boolN7JXYvF, true)
		assert.equal(boolWffEnr, true)
		assert.equal(boolbnkzazo, true)
		assert.equal(boolmibCY2t, true)
	});

	it('test for EdenCoin', async () => {
		const EdenCoinTTQVBGw = await EdenCoin.new({from: accounts[0]});
		const uintjmnGYmS = BigInt("153")
		const addressqcLhnlA = accounts[3]
		const uintwUbg6TS = BigInt("830")
		const addresswjMJwKU = accounts[4]
		const uinta2hLAXW = BigInt("1118")
		const addresssHa6dUA = "0x0000000000000000000000000000000000000001"
		const addressDjRrD4n = accounts[1]
		const uintcOcFZ3w = BigInt("87")
		const addresswd4xGJl = accounts[5]
		const uintlN6LZV9 = BigInt("1519")
		const addressdc60LUq = accounts[4]
		const boolOks7VFP = await EdenCoinTTQVBGw.transfer.call(addressqcLhnlA, uintjmnGYmS, {from: accounts[0]});
		const boolKVXgbKg = await EdenCoinTTQVBGw.decreaseApproval.call(addresswjMJwKU, uintwUbg6TS, {from: accounts[4]});
//		const boolnACkoYl = await EdenCoinTTQVBGw.transferFrom.call(addressDjRrD4n, addresssHa6dUA, uinta2hLAXW, {from: accounts[1]});
//		const boolbBZXoPx = await EdenCoinTTQVBGw.transfer.call(addresswd4xGJl, uintcOcFZ3w, {from: accounts[2]});
//		const boolcV8MKAW = await EdenCoinTTQVBGw.approve.call(addressdc60LUq, uintlN6LZV9, {from: accounts[0]});

		assert.equal(boolKVXgbKg, true)
		assert.equal(boolOks7VFP, true)
		await expect(EdenCoinTTQVBGw.transferFrom.call(addressDjRrD4n, addresssHa6dUA, uinta2hLAXW, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinLqnFOUq = await EdenCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const addressbWqFvgT = accounts[5]
		const addressz2XMEOC = accounts[2]
		const addressooCM7PL = accounts[3]
		const addressHRxc2v4 = accounts[0]
		const addressMIsXVX = accounts[2]
		const addressS0DNc61 = accounts[2]
		const uint256wlrBboi = await EdenCoinLqnFOUq.allowance.call(addressz2XMEOC, addressbWqFvgT, {from: accounts[1]});
		const uint256DNfIEXw = await EdenCoinLqnFOUq.allowance.call(addressHRxc2v4, addressooCM7PL, {from: accounts[2]});
		const uint256qtowmoB = await EdenCoinLqnFOUq.allowance.call(addressS0DNc61, addressMIsXVX, {from: accounts[3]});
	});

	it('test for EdenCoin', async () => {
		const EdenCoinZBEyfRo = await EdenCoin.new({from: accounts[4]});
		const uintkVHUIQK = BigInt("0")
		const addressguFaD1K = accounts[0]
		const boolOq71HSW = await EdenCoinZBEyfRo.decreaseApproval.call(addressguFaD1K, uintkVHUIQK, {from: accounts[3]});

		assert.equal(boolOq71HSW, true)
	});
})