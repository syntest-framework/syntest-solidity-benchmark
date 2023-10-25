const Final = artifacts.require("Final");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Final', (accounts) => {
	it('test for Final', async () => {
		const stringYHKX8bd = "7MY8QCyuLiHjbirvG"
		const stringp7GTRxh = "phdcCqtAlrxXiaoShaGVDvXVV6ryOqCxdiX2ZC23E"
		const uintF8BYi7 = BigInt("127")
		const FinalL58qvsA = await Final.new(stringYHKX8bd, stringp7GTRxh, uintF8BYi7, {from: accounts[1]});
		const uintUd71vvS = BigInt("767")
		const addressZYDphAt = accounts[0]
		const boollxiLbx5 = await FinalL58qvsA.increaseAllowance.call(addressZYDphAt, uintUd71vvS, {from: accounts[3]});
		const stringfDM1w4f = await FinalL58qvsA.symbol.call({from: accounts[0]});

		await expect(FinalL58qvsA.increaseAllowance.call(addressZYDphAt, uintUd71vvS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringmbnb2v = "meg4ZzfMPcKa8KGtpuBjXzEcNA3bcJQBB3DHG6WBvM1gHxWLBxge9REjXznp"
		const stringDIQo7pe = "5fiepcjFkB6MsWzPwqzRgQ85"
		const uintEPP4CUG = BigInt("875")
		const FinalYBtCPw7 = await Final.new(stringmbnb2v, stringDIQo7pe, uintEPP4CUG, {from: accounts[0]});
		const uintbULZfDE = BigInt("38")
		const addressgFhSZ7Z = accounts[4]
		const uintqFfbTc = BigInt("1086")
		const addressPyKFOcD = accounts[3]
		const uintwb1nhxz = BigInt("1551")
		const addressmdpZkH = accounts[4]
		const uint1LMrc5 = BigInt("1830")
		const addressvgDOUgM = accounts[3]
		const boolMVBTdI = await FinalYBtCPw7.transfer.call(addressgFhSZ7Z, uintbULZfDE, {from: accounts[5]});
		const boolCwb9rka = await FinalYBtCPw7.transfer.call(addressPyKFOcD, uintqFfbTc, {from: accounts[1]});
		const boolqwKyVKO = await FinalYBtCPw7.increaseAllowance.call(addressmdpZkH, uintwb1nhxz, {from: accounts[2]});
		const boolwZt3sbG = await FinalYBtCPw7.approve.call(addressvgDOUgM, uint1LMrc5, {from: accounts[0]});

		await expect(FinalYBtCPw7.transfer.call(addressgFhSZ7Z, uintbULZfDE, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringPbmPLxN = "DjsZNkiYn7yYZV9xRP1OQ3pKtzA7Y3jXFOFIJpQmhhaNcDKr85qE2HyyvQGmvPUKhhmcbk6UGCuhcociRfO"
		const stringnqT8t0a = "kFwo8wdcIH3ruUa0PFe9H0unU95cm9a6WP3ogRO4SkWCSYqIfdansJhll3pgdPUMw0O6VQYCwTIiFdZeH3o"
		const uinti9xN8HA = BigInt("1939")
		const FinalNKCIIP2 = await Final.new(stringPbmPLxN, stringnqT8t0a, uinti9xN8HA, {from: accounts[0]});
		const uintOZS2uw6 = BigInt("1025")
		const addressr2KXu2O = "0x0000000000000000000000000000000000000001"
		const uintNwDVLwH = BigInt("1084")
		const addressAyHXtTo = accounts[1]
		const boolDqSUAoB = await FinalNKCIIP2.approveAndCall.call(addressr2KXu2O, uintOZS2uw6, {from: accounts[0]});
		const boolI2vEXiT = await FinalNKCIIP2.approve.call(addressAyHXtTo, uintNwDVLwH, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolDqSUAoB, true)
		assert.equal(boolI2vEXiT, true)
	});

	it('test for Final', async () => {
		const stringcD94WuA = "DgnKbtmqB6mbNLhpGdNIxgA9fwI78WMFj2m7pDOxOTlvOuvi6Bo"
		const stringCKvpt2u = "Gd41n78EjEKwLGoEEoqYeQH65DfJNSvlYHEFXjjpQ4"
		const uintoDnWwTa = BigInt("714")
		const FinalD0D9Q9 = await Final.new(stringcD94WuA, stringCKvpt2u, uintoDnWwTa, {from: accounts[3]});
		const addressDF1L0AG = accounts[0]
		const uintursBqvx = BigInt("541")
		const addressWs1gKKo = accounts[1]
		const addressAT9p2IU = "0x0000000000000000000000000000000000000001"
		const addressNs0Ea4V = accounts[2]
		const boolfJPjEah = await FinalD0D9Q9.transferownership.call(addressDF1L0AG, {from: accounts[4]});
		const stringqTF3Bk4 = await FinalD0D9Q9.name.call({from: accounts[3]});
		const boolebuFC7W = await FinalD0D9Q9.decreaseAllowance.call(addressWs1gKKo, uintursBqvx, {from: accounts[0]});
		const uintOoPvgvG = await FinalD0D9Q9.allowance.call(addressNs0Ea4V, addressAT9p2IU, {from: accounts[4]});

		await expect(FinalD0D9Q9.transferownership.call(addressDF1L0AG, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringGt96LA = "qSJi62aawUHwIKOcKtJMADRyKDTsvAOg7t1SkcxQjYY9ZMyUTGD2SLf"
		const stringxH8q0rN = "MtOYVPaHjttTp9Cj62TyJzYqfdJCLgQVXqzjYGemDj6Dju1Fl52DWC"
		const uintwO83k4G = BigInt("1540")
		const FinalBy7tpqQ = await Final.new(stringGt96LA, stringxH8q0rN, uintwO83k4G, {from: accounts[2]});
		const uintLtuBJ7b = BigInt("1136")
		const addresswazWSmx = accounts[2]
		const uintr1TsibE = BigInt("1258")
		const addressESgCUww = accounts[4]
		const booli6G6wBI = await FinalBy7tpqQ.transfer.call(addresswazWSmx, uintLtuBJ7b, {from: accounts[0]});
		const uint8iVDh8S1 = await FinalBy7tpqQ.decimals.call({from: accounts[2]});
		const boolNqmTan = await FinalBy7tpqQ.approve.call(addressESgCUww, uintr1TsibE, {from: accounts[3]});

		await expect(FinalBy7tpqQ.transfer.call(addresswazWSmx, uintLtuBJ7b, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringPbmPLxN = "DjsZNkiYn7yYZV9xRP1OQ3pKtzA7Y3jXFOFIJpQmhhaNcDKr85qE2HyyvQGmvPUKhhmcbk6UGCuhcociRfO"
		const stringnqT8t0a = "kFwo8wdcIH3ruUa0PFe9H0unU95cm9a6WP3ogRO4SkWCSYqIfdansJhll3pgdPUMw0O6VQYCwTIiFdZeH3o"
		const uintaUozDy = BigInt("1939")
		const FinalNKCIIP2 = await Final.new(stringPbmPLxN, stringnqT8t0a, uintaUozDy, {from: accounts[0]});
		const uintwPa2oj5 = BigInt("1023")
		const addresstXOZXEX = "0x00000000000000000000000000000000000000-1"
		const uintB4dmuD0 = BigInt("1367")
		const addresspyXXBJy = accounts[0]
		const uintz9jVcEw = BigInt("1578")
		const addressUt34eTV = accounts[0]
		const boolDqSUAoB = await FinalNKCIIP2.approveAndCall.call(addresstXOZXEX, uintwPa2oj5, {from: accounts[0]});
		const boolsvd85N = await FinalNKCIIP2.increaseAllowance.call(addresspyXXBJy, uintB4dmuD0, {from: "0x0000000000000000000000000000000000000001"});
		const booldxZZEZ = await FinalNKCIIP2.approveAndCall.call(addressUt34eTV, uintz9jVcEw, {from: accounts[0]});

		await expect(FinalNKCIIP2.approveAndCall.call(addresstXOZXEX, uintwPa2oj5, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringmbnb2v = "meg4ZzfMPcKa8KGtpuBjXzEcNA3bcJQBB3DHG6WBvM1gHxWLBxge9REjXznp"
		const stringDIQo7pe = "5fiepcjFkB6MsWzPwqzRgQ85"
		const uintBooUucE = BigInt("875")
		const FinalYBtCPw7 = await Final.new(stringmbnb2v, stringDIQo7pe, uintBooUucE, {from: accounts[0]});
		const uintzxHX5ad = BigInt("0")
		const addressdcUqcbu = accounts[4]
		const uintn51PvE = BigInt("1677")
		const addressWnSNdO = accounts[3]
		const uintWrwUYvT = BigInt("1830")
		const addressgFYuSO6 = accounts[4]
		const boolMVBTdI = await FinalYBtCPw7.transfer.call(addressdcUqcbu, uintzxHX5ad, {from: accounts[5]});
		const boolRpgPyA = await FinalYBtCPw7.transfer.call(addressWnSNdO, uintn51PvE, {from: accounts[0]});
		const boolwZt3sbG = await FinalYBtCPw7.approve.call(addressgFYuSO6, uintWrwUYvT, {from: accounts[0]});

		assert.equal(boolMVBTdI, true)
		assert.equal(boolRpgPyA, true)
		assert.equal(boolwZt3sbG, true)
	});

	it('test for Final', async () => {
		const stringWILyKs = "xDSkJ4"
		const stringhxRtmBC = "F9bsvUZiT75sfDucgjX7F9i18BZlb6RcSpU6bv7cTw0H0OPikz56M1i92Kk1c0WgJPi6varwvgknHV4jl2s6"
		const uintCmKpta = BigInt("775")
		const FinalIO3uJm6 = await Final.new(stringWILyKs, stringhxRtmBC, uintCmKpta, {from: "0x0000000000000000000000000000000000000001"});
		const uintsRjFs3 = BigInt("534")
		const addressplbbmHQ = accounts[4]
		const uintLbKZBe2 = BigInt("1351")
		const addressmfQAZ14 = "0x0000000000000000000000000000000000000001"
		const uintmJPssD = BigInt("525")
		const addressJu9g6V1 = accounts[2]
		const boolF2ceGS = await FinalIO3uJm6.increaseAllowance.call(addressplbbmHQ, uintsRjFs3, {from: accounts[0]});
		const boolcWb3xGh = await FinalIO3uJm6.approveAndCall.call(addressmfQAZ14, uintLbKZBe2, {from: accounts[4]});
		const stringQazLDlk = await FinalIO3uJm6.name.call({from: accounts[2]});
		const boolTvrOkTM = await FinalIO3uJm6.transfer.call(addressJu9g6V1, uintmJPssD, {from: accounts[1]});
		const uint8ZAddhm = await FinalIO3uJm6.decimals.call({from: accounts[2]});
	});
})