const DJCoin = artifacts.require("DJCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DJCoin', (accounts) => {
	it('test for DJCoin', async () => {
		const DJCoinug9OmiY = await DJCoin.new({from: accounts[3]});
		const addressMmCPz4k = accounts[1]
		const addressgyRdWfC = accounts[2]
		const addressHuutoUm = accounts[4]
		const addresscb81UvS = await DJCoinug9OmiY.owner.call({from: accounts[1]});
		const uint256J3QXyin = await DJCoinug9OmiY.balanceOf.call(addressMmCPz4k, {from: accounts[2]});
		const uint256nPmyflE = await DJCoinug9OmiY.allowance.call(addressHuutoUm, addressgyRdWfC, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addresscb81UvS, 0x708afD7E9607440593355807208438CF36Ac4714)
		assert.equal(uint256J3QXyin, BigInt("0"))
		assert.equal(uint256nPmyflE, BigInt("0"))
	});

	it('test for DJCoin', async () => {
		const DJCoinjpQi5eH = await DJCoin.new({from: accounts[0]});
		const addressBYHxMBc = accounts[0]
		const addressqR1VwZy = accounts[1]
		const addressjsgZYXa = accounts[4]
		const uintxzsOc5 = BigInt("963")
		const addressucZgYXQ = accounts[3]
		const uintn0dN4s4 = BigInt("1226")
		const addressqZMJ2Go = accounts[0]
		const uint256sQ9xatV = await DJCoinjpQi5eH.balanceOf.call(addressBYHxMBc, {from: accounts[0]});
		const uint256ALw0s66 = await DJCoinjpQi5eH.allowance.call(addressjsgZYXa, addressqR1VwZy, {from: accounts[5]});
//		const boolBY2dbZ = await DJCoinjpQi5eH.transfer.call(addressucZgYXQ, uintxzsOc5, {from: accounts[3]});
//		const boolc3v8Hd = await DJCoinjpQi5eH.transfer.call(addressqZMJ2Go, uintn0dN4s4, {from: accounts[0]});
//		const uint256yCL8Rfx = await DJCoinjpQi5eH.totalSupply.call({from: accounts[0]});

		assert.equal(uint256ALw0s66, BigInt("0"))
		assert.equal(uint256sQ9xatV, BigInt("2100000000000"))
		await expect(DJCoinjpQi5eH.transfer.call(addressucZgYXQ, uintxzsOc5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinGE2ucC4 = await DJCoin.new({from: accounts[2]});
		const addressSvIfqJO = accounts[1]
		const addressKQJSMmz = accounts[4]
		const addressi5i2Qum = accounts[2]
		const uintM6VX6ML = BigInt("1286")
		const addresspaY5jJH = accounts[3]
		const addressBInDPMH = accounts[2]
		const addressggXFims = accounts[4]
		const addressePMXe6M = "0x0000000000000000000000000000000000000001"
//		const addressyaDJ30S = await DJCoinGE2ucC4.transferOwnership.call(addressSvIfqJO, {from: accounts[1]});
//		const uint256JtMjrS2 = await DJCoinGE2ucC4.allowance.call(addressi5i2Qum, addressKQJSMmz, {from: accounts[1]});
//		const boolx9k1rNA = await DJCoinGE2ucC4.transferFrom.call(addressBInDPMH, addresspaY5jJH, uintM6VX6ML, {from: accounts[1]});
//		const uint256XM0AG7x = await DJCoinGE2ucC4.allowance.call(addressePMXe6M, addressggXFims, {from: accounts[4]});
//		await DJCoinGE2ucC4.renounceOwnership.call({from: accounts[5]});

		await expect(DJCoinGE2ucC4.transferOwnership.call(addressSvIfqJO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinBdKl5dr = await DJCoin.new({from: accounts[1]});
		const uintJK4dUat = BigInt("146")
		const addressWVARxCN = accounts[2]
		const addressBtpplHR = accounts[2]
		const uintYVJh2IG = BigInt("358")
		const addresstPq9puQ = "0x0000000000000000000000000000000000000001"
		const addressi7ptoCJ = accounts[3]
//		const boolhaN3FB4 = await DJCoinBdKl5dr.transferFrom.call(addressBtpplHR, addressWVARxCN, uintJK4dUat, {from: accounts[2]});
//		const boolD0FtA34 = await DJCoinBdKl5dr.transferFrom.call(addressi7ptoCJ, addresstPq9puQ, uintYVJh2IG, {from: accounts[2]});

		await expect(DJCoinBdKl5dr.transferFrom.call(addressBtpplHR, addressWVARxCN, uintJK4dUat, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinZBZ3G3B = await DJCoin.new({from: accounts[5]});
		const uintl2xjoQe = BigInt("776")
		const addressQtUAgB3 = accounts[1]
		const uintYSpMYis = BigInt("976")
		const addressKcjU5PC = accounts[2]
		const addressGbcUUmW = accounts[2]
		const addressg3tq5gf = "0x0000000000000000000000000000000000000001"
		const uint256NcQVGhI = await DJCoinZBZ3G3B.totalSupply.call({from: accounts[1]});
		const uint256F0vjia = await DJCoinZBZ3G3B.totalSupply.call({from: accounts[0]});
		const boolCcj69tT = await DJCoinZBZ3G3B.increaseAllowance.call(addressQtUAgB3, uintl2xjoQe, {from: accounts[0]});
		const boolPtCGS1 = await DJCoinZBZ3G3B.increaseAllowance.call(addressKcjU5PC, uintYSpMYis, {from: accounts[5]});
		const uint256QRJeqcp = await DJCoinZBZ3G3B.allowance.call(addressg3tq5gf, addressGbcUUmW, {from: accounts[2]});

		assert.equal(boolCcj69tT, true)
		assert.equal(boolPtCGS1, true)
		assert.equal(uint256F0vjia, BigInt("2100000000000"))
		assert.equal(uint256NcQVGhI, BigInt("2100000000000"))
		assert.equal(uint256QRJeqcp, BigInt("0"))
	});

	it('test for DJCoin', async () => {
		const DJCoinjpQi5eH = await DJCoin.new({from: accounts[0]});
		const uintMN36ZnI = BigInt("1858")
		const addressZTw1lzm = accounts[1]
		const addressgnVD0wx = accounts[0]
		const addressX0xxUwD = accounts[1]
		const addressw8EtqiR = accounts[4]
		const uinthCG7umf = BigInt("963")
		const addressauX4xMS = accounts[4]
		const uintqg3qW6Y = BigInt("367")
		const addressa6AK1ME = accounts[2]
		const uintt6jwSmF = BigInt("1226")
		const addresspaSES7k = accounts[0]
		const boolVNM5ELv = await DJCoinjpQi5eH.approve.call(addressZTw1lzm, uintMN36ZnI, {from: accounts[0]});
		const uint256sQ9xatV = await DJCoinjpQi5eH.balanceOf.call(addressgnVD0wx, {from: accounts[0]});
		const uint256ALw0s66 = await DJCoinjpQi5eH.allowance.call(addressw8EtqiR, addressX0xxUwD, {from: accounts[5]});
//		const boolBY2dbZ = await DJCoinjpQi5eH.transfer.call(addressauX4xMS, uinthCG7umf, {from: accounts[3]});
//		const bool92rafk = await DJCoinjpQi5eH.approve.call(addressa6AK1ME, uintqg3qW6Y, {from: accounts[4]});
//		const boolc3v8Hd = await DJCoinjpQi5eH.transfer.call(addresspaSES7k, uintt6jwSmF, {from: accounts[0]});
//		const uint256yCL8Rfx = await DJCoinjpQi5eH.totalSupply.call({from: accounts[0]});

		assert.equal(boolVNM5ELv, true)
		assert.equal(uint256ALw0s66, BigInt("0"))
		assert.equal(uint256sQ9xatV, BigInt("2100000000000"))
		await expect(DJCoinjpQi5eH.transfer.call(addressauX4xMS, uinthCG7umf, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinug9OmiY = await DJCoin.new({from: accounts[3]});
		const addressfonTk0g = accounts[2]
		const addresspr253e = accounts[2]
		const addressw1trAY = accounts[3]
		const uintBRNx0p = BigInt("1283")
		const addressAgODKw = "0x0000000000000000000000000000000000000001"
		const addresspQYuPC = accounts[2]
		const addressxPs0uSw = accounts[4]
		const addresscb81UvS = await DJCoinug9OmiY.owner.call({from: accounts[1]});
		const uint256j3ch6vb = await DJCoinug9OmiY.balanceOf.call(addressfonTk0g, {from: accounts[2]});
		const uint256J3QXyin = await DJCoinug9OmiY.balanceOf.call(addresspr253e, {from: accounts[2]});
		const uint256x1ESCb1 = await DJCoinug9OmiY.balanceOf.call(addressw1trAY, {from: accounts[1]});
		const boollWZjiG7 = await DJCoinug9OmiY.decreaseAllowance.call(addressAgODKw, uintBRNx0p, {from: accounts[5]});
		const uint256nPmyflE = await DJCoinug9OmiY.allowance.call(addressxPs0uSw, addresspQYuPC, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addresscb81UvS, 0x708afD7E9607440593355807208438CF36Ac4714)
		assert.equal(boollWZjiG7, true)
		assert.equal(uint256J3QXyin, BigInt("0"))
		assert.equal(uint256j3ch6vb, BigInt("0"))
		assert.equal(uint256nPmyflE, BigInt("0"))
		assert.equal(uint256x1ESCb1, BigInt("2100000000000"))
	});

	it('test for DJCoin', async () => {
		const DJCoinjpQi5eH = await DJCoin.new({from: accounts[0]});
		const uint5i6Yj1 = BigInt("1858")
		const addressvNpEWC9 = accounts[1]
		const addressN4lrwBI = accounts[0]
		const addressiSk67Ud = accounts[0]
		const addressBt3uTxJ = accounts[1]
		const addressohuXqHI = accounts[4]
		const uintjrRtL5G = BigInt("1918")
		const addressaaaTZKK = accounts[4]
		const uintrKdBBPe = BigInt("367")
		const addressByJmgh3 = accounts[2]
		const uintujLFz1s = BigInt("1231")
		const uintg3wwBsy = BigInt("1024")
		const uintfsE1EPH = BigInt("1226")
		const addressR07bUS = accounts[0]
		const boolVNM5ELv = await DJCoinjpQi5eH.approve.call(addressvNpEWC9, uint5i6Yj1, {from: accounts[0]});
		const uint256sQ9xatV = await DJCoinjpQi5eH.balanceOf.call(addressN4lrwBI, {from: accounts[0]});
//		const addressXbOBc2x = await DJCoinjpQi5eH.validRecipient.call(addressiSk67Ud, {from: accounts[4]});
//		const uint256ALw0s66 = await DJCoinjpQi5eH.allowance.call(addressohuXqHI, addressBt3uTxJ, {from: accounts[5]});
//		const boolBY2dbZ = await DJCoinjpQi5eH.transfer.call(addressaaaTZKK, uintjrRtL5G, {from: accounts[3]});
//		const bool92rafk = await DJCoinjpQi5eH.approve.call(addressByJmgh3, uintrKdBBPe, {from: accounts[4]});
//		const uint256rfVWGiT = await DJCoinjpQi5eH.burn.call(uintg3wwBsy, uintujLFz1s, {from: accounts[1]});
//		const boolc3v8Hd = await DJCoinjpQi5eH.transfer.call(addressR07bUS, uintfsE1EPH, {from: accounts[0]});
//		const uint256yCL8Rfx = await DJCoinjpQi5eH.totalSupply.call({from: accounts[0]});

		assert.equal(boolVNM5ELv, true)
		assert.equal(uint256sQ9xatV, BigInt("2100000000000"))
		await expect(DJCoinjpQi5eH.validRecipient.call(addressiSk67Ud, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinjpQi5eH = await DJCoin.new({from: accounts[0]});
		const addressKHL8tIb = accounts[0]
		const address2kqKyy = accounts[1]
		const addresslKyd9tE = accounts[4]
		const uintNZwAfc = BigInt("1592")
		const uintTd80KEe = BigInt("963")
		const addressCHKXlox = accounts[3]
		const uintwcviLsu = BigInt("1903")
		const addressaNU2ivq = accounts[0]
		const addressoQeSUej = accounts[3]
		const addressRLlL7ms = accounts[3]
		const addressAABQVTX = "0x0000000000000000000000000000000000000001"
		const uint2wGc0o = BigInt("1226")
		const addresso5wcftb = accounts[0]
		const uint256sQ9xatV = await DJCoinjpQi5eH.balanceOf.call(addressKHL8tIb, {from: accounts[0]});
		const uint256ALw0s66 = await DJCoinjpQi5eH.allowance.call(addresslKyd9tE, address2kqKyy, {from: accounts[5]});
		const booloV9mshY = await DJCoinjpQi5eH.changetokensPerBlock.call(uintNZwAfc, {from: accounts[0]});
//		const boolBY2dbZ = await DJCoinjpQi5eH.transfer.call(addressCHKXlox, uintTd80KEe, {from: accounts[3]});
//		const boolrBVMWw0 = await DJCoinjpQi5eH.transferFrom.call(addressoQeSUej, addressaNU2ivq, uintwcviLsu, {from: accounts[2]});
//		const uint256NMJxiNM = await DJCoinjpQi5eH.allowance.call(addressAABQVTX, addressRLlL7ms, {from: accounts[0]});
//		const boolc3v8Hd = await DJCoinjpQi5eH.transfer.call(addresso5wcftb, uint2wGc0o, {from: accounts[0]});
//		const uint256yCL8Rfx = await DJCoinjpQi5eH.totalSupply.call({from: accounts[0]});

		assert.equal(booloV9mshY, true)
		assert.equal(uint256ALw0s66, BigInt("0"))
		assert.equal(uint256sQ9xatV, BigInt("2100000000000"))
		await expect(DJCoinjpQi5eH.transfer.call(addressCHKXlox, uintTd80KEe, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinpToBvPH = await DJCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintz8KMxo5 = BigInt("598")
		const addressO7Sg4FS = accounts[1]
		const uintObDx8sI = BigInt("1410")
		const addressw7ubZ5J = "0x0000000000000000000000000000000000000001"
		const addressymdgvVJ = accounts[4]
		const addresszkzsyc9 = accounts[0]
		const addressSDLNbSZ = accounts[5]
		const uintkt4vKau = BigInt("599")
		const addressdyyWq5m = accounts[1]
		const boolXUebyo3 = await DJCoinpToBvPH.transfer.call(addressO7Sg4FS, uintz8KMxo5, {from: accounts[5]});
		const boolnfUgyRr = await DJCoinpToBvPH.increaseAllowance.call(addressw7ubZ5J, uintObDx8sI, {from: accounts[4]});
		const uint256nsg5tB = await DJCoinpToBvPH.totalSupply.call({from: accounts[5]});
		const addressQzdTaXU = await DJCoinpToBvPH.validRecipient.call(addressymdgvVJ, {from: accounts[1]});
		const uint256vHUbc57 = await DJCoinpToBvPH.allowance.call(addressSDLNbSZ, addresszkzsyc9, {from: "0x0000000000000000000000000000000000000001"});
		const boolbZ671fl = await DJCoinpToBvPH.transfer.call(addressdyyWq5m, uintkt4vKau, {from: accounts[3]});
	});

	it('test for DJCoin', async () => {
		const DJCoinjpQi5eH = await DJCoin.new({from: accounts[0]});
		const addresswtXkOt = accounts[0]
		const addressmNM5b7r = accounts[3]
		const uintMGdC0pa = BigInt("631")
		const addressyIBqPR4 = accounts[0]
		const uintKfkTVV = BigInt("807")
		const uintNF46qKj = BigInt("932")
		const uintxmaWOs = BigInt("957")
		const addressN9wJRF = "0x0000000000000000000000000000000000000001"
		const uintCRgDUCN = BigInt("963")
		const addressyCUrlN = accounts[4]
		const uintoyCKxQo = BigInt("1167")
		const addressdzFa2fk = accounts[4]
		const uintCfw8Jto = BigInt("1286")
		const addressx5oswHv = accounts[0]
		const uint256sQ9xatV = await DJCoinjpQi5eH.balanceOf.call(addresswtXkOt, {from: accounts[0]});
		const addressHRbX0l = await DJCoinjpQi5eH.transferOwnership.call(addressmNM5b7r, {from: accounts[0]});
//		const boolXFxDduS = await DJCoinjpQi5eH.transfer.call(addressyIBqPR4, uintMGdC0pa, {from: accounts[4]});
//		const uint256Ma44HY3 = await DJCoinjpQi5eH.burn.call(uintNF46qKj, uintKfkTVV, {from: accounts[2]});
//		const boolAGVcNJ9 = await DJCoinjpQi5eH.increaseAllowance.call(addressN9wJRF, uintxmaWOs, {from: accounts[5]});
//		const boolBY2dbZ = await DJCoinjpQi5eH.transfer.call(addressyCUrlN, uintCRgDUCN, {from: accounts[3]});
//		const boolptVPk1p = await DJCoinjpQi5eH.transfer.call(addressdzFa2fk, uintoyCKxQo, {from: accounts[0]});
//		const boolc3v8Hd = await DJCoinjpQi5eH.transfer.call(addressx5oswHv, uintCfw8Jto, {from: accounts[0]});

		assert.equal(uint256sQ9xatV, BigInt("2100000000000"))
		await expect(DJCoinjpQi5eH.transfer.call(addressyIBqPR4, uintMGdC0pa, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinBdKl5dr = await DJCoin.new({from: accounts[1]});
		const uintI9D2IFT = BigInt("247")
		const uintUZHV6Vi = BigInt("518")
		const uintiKbE22w = BigInt("358")
		const addressuIqO6n4 = "0x0000000000000000000000000000000000000001"
		const addressXhFaCLB = accounts[4]
		const addressjfGvq0 = accounts[2]
		const addressR9yrx2w = "0x0000000000000000000000000000000000000001"
		const uint256HdO1r4i = await DJCoinBdKl5dr.burn.call(uintUZHV6Vi, uintI9D2IFT, {from: accounts[1]});
//		const boolD0FtA34 = await DJCoinBdKl5dr.transferFrom.call(addressXhFaCLB, addressuIqO6n4, uintiKbE22w, {from: accounts[2]});
//		const uint256fkxuJg = await DJCoinBdKl5dr.allowance.call(addressR9yrx2w, addressjfGvq0, {from: accounts[5]});

		assert.equal(uint256HdO1r4i, BigInt("2048130000000"))
		await expect(DJCoinBdKl5dr.transferFrom.call(addressXhFaCLB, addressuIqO6n4, uintiKbE22w, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinBdKl5dr = await DJCoin.new({from: accounts[1]});
		const uintEkIwny9 = BigInt("0")
		const addressAPjGA6v = accounts[1]
		const uint256tK7mVu = await DJCoinBdKl5dr.totalSupply.call({from: accounts[0]});
		const boolzGB6Qrk = await DJCoinBdKl5dr.transfer.call(addressAPjGA6v, uintEkIwny9, {from: accounts[4]});
		const uint256cKztyPP = await DJCoinBdKl5dr.totalSupply.call({from: accounts[1]});

		assert.equal(boolzGB6Qrk, true)
		assert.equal(uint256cKztyPP, BigInt("2100000000000"))
		assert.equal(uint256tK7mVu, BigInt("2100000000000"))
	});

	it('test for DJCoin', async () => {
		const DJCoinBdKl5dr = await DJCoin.new({from: accounts[1]});
		const uintuauDnAX = BigInt("760")
		const addressoKTOJCL = accounts[2]
		const addressjkEUlv6 = accounts[4]
		const uintFPuspI0 = BigInt("358")
		const addressg194pTv = "0x00000000000000000000000000000000000000-1"
		const addressjnALxp = accounts[4]
		const uintg40YfnS = BigInt("820")
		const addressS39AKJ = accounts[1]
		const addressqccWC48 = accounts[2]
		const boolIKd1c1B = await DJCoinBdKl5dr.increaseAllowance.call(addressoKTOJCL, uintuauDnAX, {from: accounts[0]});
		const uint256bPlypvB = await DJCoinBdKl5dr.balanceOf.call(addressjkEUlv6, {from: accounts[0]});
//		const boolD0FtA34 = await DJCoinBdKl5dr.transferFrom.call(addressjnALxp, addressg194pTv, uintFPuspI0, {from: accounts[2]});
//		const boolRDZLFKD = await DJCoinBdKl5dr.transferFrom.call(addressqccWC48, addressS39AKJ, uintg40YfnS, {from: accounts[2]});

		assert.equal(boolIKd1c1B, true)
		assert.equal(uint256bPlypvB, BigInt("0"))
		await expect(DJCoinBdKl5dr.transferFrom.call(addressjnALxp, addressg194pTv, uintFPuspI0, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinBdKl5dr = await DJCoin.new({from: accounts[1]});
		const uintVPS2gd5 = BigInt("0")
		const addressUIVjxr4 = accounts[1]
		const boolzGB6Qrk = await DJCoinBdKl5dr.transfer.call(addressUIVjxr4, uintVPS2gd5, {from: accounts[4]});
//		await DJCoinBdKl5dr.renounceOwnership.call({from: accounts[1]});

		assert.equal(boolzGB6Qrk, true)
		await expect(DJCoinBdKl5dr.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinBdKl5dr = await DJCoin.new({from: accounts[1]});
		const addressyPkcrBX = accounts[4]
		const uintWKda0al = BigInt("358")
		const addressd1bfJ0V = "0x00000000000000000000000000000000000000-2"
		const addressNDGL0LQ = accounts[4]
		const uintB30l3KV = BigInt("820")
		const addresshmVhUW = accounts[1]
		const addressbnvVjmm = accounts[2]
		const addressCPEuhkR = accounts[1]
		const uint256bPlypvB = await DJCoinBdKl5dr.balanceOf.call(addressyPkcrBX, {from: accounts[0]});
//		const boolD0FtA34 = await DJCoinBdKl5dr.transferFrom.call(addressNDGL0LQ, addressd1bfJ0V, uintWKda0al, {from: accounts[2]});
//		const boolRDZLFKD = await DJCoinBdKl5dr.transferFrom.call(addressbnvVjmm, addresshmVhUW, uintB30l3KV, {from: accounts[2]});
//		const uint256QAsUIjS = await DJCoinBdKl5dr.balanceOf.call(addressCPEuhkR, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256bPlypvB, BigInt("0"))
		await expect(DJCoinBdKl5dr.transferFrom.call(addressNDGL0LQ, addressd1bfJ0V, uintWKda0al, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})