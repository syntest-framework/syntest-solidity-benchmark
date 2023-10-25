const FreakCoin = artifacts.require("FreakCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FreakCoin', (accounts) => {
	it('test for FreakCoin', async () => {
		const FreakCoinc1S5tfz = await FreakCoin.new({from: accounts[0]});
		const addressxkappvV = accounts[1]
		const addressExaXbZQ = accounts[3]
		const addressKgoHcBe = accounts[5]
		const uintWYpFHrw = BigInt("1919")
		const addressAmBIkHr = accounts[4]
		const addressCCwY4LC = accounts[1]
		const uintLzOljtZ = BigInt("1385")
		const addresscaRUQX9 = accounts[3]
		const addresss7n7Fgu = accounts[2]
		const uint256XFcnk5L = await FreakCoinc1S5tfz.balanceOf.call(addressxkappvV, {from: accounts[0]});
		const uint256gyXxQ1 = await FreakCoinc1S5tfz.allowance.call(addressKgoHcBe, addressExaXbZQ, {from: accounts[0]});
//		const boolnsvWe6g = await FreakCoinc1S5tfz.transferFrom.call(addressCCwY4LC, addressAmBIkHr, uintWYpFHrw, {from: accounts[0]});
//		const boolGCQHf0m = await FreakCoinc1S5tfz.transfer.call(addresscaRUQX9, uintLzOljtZ, {from: accounts[3]});
//		const uint256vylKeyb = await FreakCoinc1S5tfz.allUserBalances.call(addresss7n7Fgu, {from: accounts[4]});

		assert.equal(uint256XFcnk5L, BigInt("0"))
		assert.equal(uint256gyXxQ1, BigInt("0"))
		await expect(FreakCoinc1S5tfz.transferFrom.call(addressCCwY4LC, addressAmBIkHr, uintWYpFHrw, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinbSInzc0 = await FreakCoin.new({from: accounts[4]});
		const addressEtm7OR9 = accounts[2]
		const addressZk0BNW = accounts[1]
		const uint256dYb8YKJ = await FreakCoinbSInzc0.totalSupply.call({from: accounts[4]});
		const addressEzCuzkt = await FreakCoinbSInzc0.uniswapAddress.call({from: accounts[3]});
		const uint256Hf687wX = await FreakCoinbSInzc0.balanceOf.call(addressEtm7OR9, {from: accounts[3]});
//		const addressWHXn2I1 = await FreakCoinbSInzc0.setUniswapAddress.call(addressZk0BNW, {from: accounts[1]});

		assert.equal(addressEzCuzkt, 0x0000000000000000000000000000000000000000)
		assert.equal(uint256Hf687wX, BigInt("0"))
		assert.equal(uint256dYb8YKJ, BigInt("1000000"))
		await expect(FreakCoinbSInzc0.setUniswapAddress.call(addressZk0BNW, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinCGXuHsL = await FreakCoin.new({from: accounts[3]});
		const uintVyboli6 = BigInt("1262")
		const addressE0SoQjL = accounts[4]
		const addressf5X7hx = accounts[2]
		const addressO6rDqH4 = accounts[2]
		const addressp0HxgQU = accounts[4]
		const uintwEkotqp = BigInt("1728")
		const addressRHeIAQ8 = accounts[0]
		const address0mdbVQ = accounts[3]
		const uintQJSOz6P = BigInt("1480")
		const address69pEI8 = accounts[1]
		const boolELohJ5w = await FreakCoinCGXuHsL.approve.call(addressE0SoQjL, uintVyboli6, {from: accounts[5]});
		const uint256Rgul7mW = await FreakCoinCGXuHsL.allowance.call(addressO6rDqH4, addressf5X7hx, {from: accounts[1]});
		const uint256RrQbhV8 = await FreakCoinCGXuHsL.balanceOf.call(addressp0HxgQU, {from: accounts[4]});
//		const boolq8jiW11 = await FreakCoinCGXuHsL.transferFrom.call(address0mdbVQ, addressRHeIAQ8, uintwEkotqp, {from: accounts[0]});
//		const uint256c12Vu11 = await FreakCoinCGXuHsL.totalSupply.call({from: accounts[1]});
//		const boolAKdHeP = await FreakCoinCGXuHsL.transfer.call(address69pEI8, uintQJSOz6P, {from: accounts[2]});

		assert.equal(boolELohJ5w, true)
		assert.equal(uint256Rgul7mW, BigInt("0"))
		assert.equal(uint256RrQbhV8, BigInt("0"))
		await expect(FreakCoinCGXuHsL.transferFrom.call(address0mdbVQ, addressRHeIAQ8, uintwEkotqp, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoincdcQ0vA = await FreakCoin.new({from: accounts[2]});
		const addressmqfhbi5 = accounts[4]
		const uint256WWY9eDG = await FreakCoincdcQ0vA.totalSupply.call({from: accounts[1]});
//		const uint256vjwGBQS = await FreakCoincdcQ0vA.allUserBalances.call(addressmqfhbi5, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256eBtuDWd = await FreakCoincdcQ0vA.totalSupply.call({from: accounts[5]});

		assert.equal(uint256WWY9eDG, BigInt("1000000"))
		await expect(FreakCoincdcQ0vA.allUserBalances.call(addressmqfhbi5, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinz6wX7g4 = await FreakCoin.new({from: accounts[1]});
		const addressDfdizF = accounts[0]
		const addressA6KQodO = accounts[2]
		const uintUmLLqKH = BigInt("10")
		const addresskyAeiWZ = "0x0000000000000000000000000000000000000001"
		const addressxgy2i5l = accounts[3]
		const addressw3ThM0 = "0x0000000000000000000000000000000000000001"
		const uint256MtmpGtZ = await FreakCoinz6wX7g4.allowance.call(addressA6KQodO, addressDfdizF, {from: accounts[4]});
//		const boolyv9xNVn = await FreakCoinz6wX7g4.transfer.call(addresskyAeiWZ, uintUmLLqKH, {from: accounts[3]});
//		const uint256JiTNi6U = await FreakCoinz6wX7g4.allowance.call(addressw3ThM0, addressxgy2i5l, {from: accounts[1]});
//		const addressjyq9Xg9 = await FreakCoinz6wX7g4.uniswapAddress.call({from: accounts[2]});

		assert.equal(uint256MtmpGtZ, BigInt("0"))
		await expect(FreakCoinz6wX7g4.transfer.call(addresskyAeiWZ, uintUmLLqKH, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinDHSjfSB = await FreakCoin.new({from: accounts[0]});
		const addresseeV7NeK = accounts[0]
		const addressZfH1lx = accounts[2]
		const uintxPMq6AE = BigInt("1090")
		const addressNKt2GAA = accounts[2]
		const addressLRJQC7j = accounts[2]
		const uintR7ffT0d = BigInt("930")
		const addressa3l4r1Y = accounts[2]
		const uintDTj6TM = BigInt("386")
		const addressA8r2K6r = "0x0000000000000000000000000000000000000001"
		const uintTXfeBHN = BigInt("755")
		const addresstLT0bpx = accounts[4]
		const addresshbK9Xg = accounts[1]
		const uint256Hpsxta = await FreakCoinDHSjfSB.allowance.call(addressZfH1lx, addresseeV7NeK, {from: accounts[5]});
		const boolev115eH = await FreakCoinDHSjfSB.transfer.call(addressNKt2GAA, uintxPMq6AE, {from: accounts[0]});
//		const addressEtybtdu = await FreakCoinDHSjfSB.setUniswapAddress.call(addressLRJQC7j, {from: accounts[4]});
//		const boolqukxYuz = await FreakCoinDHSjfSB.transfer.call(addressa3l4r1Y, uintR7ffT0d, {from: accounts[4]});
//		const boolETkXLjh = await FreakCoinDHSjfSB.approve.call(addressA8r2K6r, uintDTj6TM, {from: accounts[1]});
//		const boolKi8BnRZ = await FreakCoinDHSjfSB.transferFrom.call(addresshbK9Xg, addresstLT0bpx, uintTXfeBHN, {from: accounts[2]});

		assert.equal(boolev115eH, true)
		assert.equal(uint256Hpsxta, BigInt("0"))
		await expect(FreakCoinDHSjfSB.setUniswapAddress.call(addressLRJQC7j, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinYQlZVQJ = await FreakCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintgPLWxr1 = BigInt("759")
		const addressKTsGHy5 = accounts[4]
		const addressPFmCPQn = accounts[3]
		const addressrjbClas = await FreakCoinYQlZVQJ.uniswapAddress.call({from: accounts[2]});
		const boolzCWz8IT = await FreakCoinYQlZVQJ.approve.call(addressKTsGHy5, uintgPLWxr1, {from: accounts[4]});
		const addressT6wDKt = await FreakCoinYQlZVQJ.setUniswapAddress.call(addressPFmCPQn, {from: accounts[4]});
	});

	it('test for FreakCoin', async () => {
		const FreakCoinDHSjfSB = await FreakCoin.new({from: accounts[0]});
		const addresswxtFlfx = accounts[0]
		const addressevHRkpa = accounts[2]
		const address3vdvn8 = accounts[1]
		const uintwQ9oILw = BigInt("1090")
		const addressY6xv2b = accounts[2]
		const uintS1uXTAZ = BigInt("1618")
		const addressBACpulM = accounts[0]
		const uintx6541HN = BigInt("755")
		const addressjxAzSl = accounts[5]
		const addresssGyh4YV = accounts[1]
		const uint256Hpsxta = await FreakCoinDHSjfSB.allowance.call(addressevHRkpa, addresswxtFlfx, {from: accounts[5]});
		const uint256GICkhZH = await FreakCoinDHSjfSB.balanceOf.call(address3vdvn8, {from: "0x0000000000000000000000000000000000000001"});
		const boolev115eH = await FreakCoinDHSjfSB.transfer.call(addressY6xv2b, uintwQ9oILw, {from: accounts[0]});
		const boolGim3Q8w = await FreakCoinDHSjfSB.transfer.call(addressBACpulM, uintS1uXTAZ, {from: accounts[0]});
//		const boolKi8BnRZ = await FreakCoinDHSjfSB.transferFrom.call(addresssGyh4YV, addressjxAzSl, uintx6541HN, {from: accounts[2]});

		assert.equal(boolGim3Q8w, true)
		assert.equal(boolev115eH, true)
		assert.equal(uint256GICkhZH, BigInt("0"))
		assert.equal(uint256Hpsxta, BigInt("0"))
		await expect(FreakCoinDHSjfSB.transferFrom.call(addresssGyh4YV, addressjxAzSl, uintx6541HN, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})