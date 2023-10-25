const MARVELCOIN = artifacts.require("MARVELCOIN");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MARVELCOIN', (accounts) => {
	it('test for MARVELCOIN', async () => {
		const uintp6t6clq = BigInt("165")
		const stringT5MHt5 = "uOePcSWhZewXMy5ew0ZbzyZ2aKJRUSzrYvcl3njXB5l9tpcLNOb20fSWWV23lslbUAJj5"
		const stringfxqLGVl = "ovMiYgJ9TcMX5Y4hLZlDNB47h3egOHVOt1PZEYK7tJeWANJImpAm3StM5lcTWExd3ID"
		const MARVELCOINMkzb8V7 = await MARVELCOIN.new(uintp6t6clq, stringT5MHt5, stringfxqLGVl, {from: accounts[3]});
		const uintvuvPHxQ = BigInt("1104")
		const addressYnBA1cP = accounts[2]
		const uintS2hvMlA = BigInt("1439")
		const addressRsbvP7N = accounts[0]
		const uintWDXMsmg = BigInt("62")
		const addressNDwIQvU = accounts[2]
		const addressQHx8DKn = accounts[3]
//		const bool55TLVu = await MARVELCOINMkzb8V7.burnFrom.call(addressYnBA1cP, uintvuvPHxQ, {from: accounts[4]});
//		const booljywMLNy = await MARVELCOINMkzb8V7.approve.call(addressRsbvP7N, uintS2hvMlA, {from: accounts[3]});
//		const boolB2ykwkY = await MARVELCOINMkzb8V7.transferFrom.call(addressQHx8DKn, addressNDwIQvU, uintWDXMsmg, {from: "0x0000000000000000000000000000000000000001"});

		await expect(MARVELCOINMkzb8V7.burnFrom.call(addressYnBA1cP, uintvuvPHxQ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintpVY2M99 = BigInt("391")
		const stringGK7yzEG = "tCFYI7Dcez1JogWHdNRu5U89v5lpU8odV86y4gfK2"
		const stringeLKGkx = "PYCd0xW3yFweqxk4YW53aOiRNaEQcZF9bEEntCQwaSe261jW6"
		const MARVELCOINdxGd9dU = await MARVELCOIN.new(uintpVY2M99, stringGK7yzEG, stringeLKGkx, {from: accounts[0]});
		const uintFElyzUW = BigInt("516")
		const byteez70Yd = "0x0c1202"
		const uintTF8kAad = BigInt("1777")
		const addressoyOv0m4 = accounts[1]
		const uintQL2dJsI = BigInt("1519")
		const addressqBJzHPs = accounts[2]
		const uintTSy40mu = BigInt("11")
		const addressdRTICpG = accounts[1]
		const byteac8NbZ = "0x190b151a091d0d05"
		const uintPuzoDr1 = BigInt("1202")
		const addressJCbN26F = accounts[3]
		const boolBO38Lc1 = await MARVELCOINdxGd9dU.burn.call(uintFElyzUW, {from: accounts[0]});
//		const booluvVBHBQ = await MARVELCOINdxGd9dU.approveAndCall.call(addressoyOv0m4, uintTF8kAad, byteez70Yd, {from: accounts[4]});
//		const boolY4M8yL3 = await MARVELCOINdxGd9dU.burnFrom.call(addressqBJzHPs, uintQL2dJsI, {from: accounts[1]});
//		const boolZU5eEXk = await MARVELCOINdxGd9dU.approve.call(addressdRTICpG, uintTSy40mu, {from: accounts[3]});
//		const boolCGaYosB = await MARVELCOINdxGd9dU.approveAndCall.call(addressJCbN26F, uintPuzoDr1, byteac8NbZ, {from: accounts[0]});

		assert.equal(boolBO38Lc1, true)
		await expect(MARVELCOINdxGd9dU.approveAndCall.call(addressoyOv0m4, uintTF8kAad, byteez70Yd, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintqtFSnIO = BigInt("1800")
		const stringuQr0Sd3 = "fUs8J6d"
		const stringoCybkjT = "UAhsFzz1q8Y9Qgv"
		const MARVELCOINLLgK8fH = await MARVELCOIN.new(uintqtFSnIO, stringuQr0Sd3, stringoCybkjT, {from: accounts[2]});
		const uintaK5BaA = BigInt("434")
		const addressYkf1WZy = accounts[3]
		const addressgI468Hi = accounts[1]
		const uintNNEeYPn = BigInt("1508")
		const addressqgbvbBC = accounts[3]
		const addressJrkPtUt = accounts[1]
		const uintvUpKuyr = BigInt("1432")
//		const boolDuX6wsy = await MARVELCOINLLgK8fH.transferFrom.call(addressgI468Hi, addressYkf1WZy, uintaK5BaA, {from: accounts[4]});
//		const boolZgrtbJK = await MARVELCOINLLgK8fH.transferFrom.call(addressJrkPtUt, addressqgbvbBC, uintNNEeYPn, {from: accounts[1]});
//		const boolMOJ7Ldy = await MARVELCOINLLgK8fH.burn.call(uintvUpKuyr, {from: accounts[4]});

		await expect(MARVELCOINLLgK8fH.transferFrom.call(addressgI468Hi, addressYkf1WZy, uintaK5BaA, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintQkKYECm = BigInt("463")
		const stringGfo5edB = "dmhpPjjxlS3UuQvjUdyHuiJjXpYSoh7oagM2PUeu1NNxoOVMo8HkEN4rPPQh3dfHsATqcVvycmrxSrhrVjs0LztuG7Xtp"
		const stringVjlpZUr = "xJITptL"
		const MARVELCOINyhGSKMq = await MARVELCOIN.new(uintQkKYECm, stringGfo5edB, stringVjlpZUr, {from: accounts[5]});
		const uintgPyqXIb = BigInt("1424")
		const addressguLfl7j = accounts[5]
		const uintKsKNiAa = BigInt("794")
		const addressOQZIKzt = accounts[0]
		const addresscP9jXq = accounts[3]
//		const boolLKF6KmD = await MARVELCOINyhGSKMq.transfer.call(addressguLfl7j, uintgPyqXIb, {from: accounts[4]});
//		const boolsm9vgpj = await MARVELCOINyhGSKMq.transferFrom.call(addresscP9jXq, addressOQZIKzt, uintKsKNiAa, {from: accounts[1]});

		await expect(MARVELCOINyhGSKMq.transfer.call(addressguLfl7j, uintgPyqXIb, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintKVuXVPf = BigInt("1480")
		const stringGOZZEu = "0Pg8CdjXwl4T"
		const stringpvqSkC5 = "j9b1pAiW85pKWNP99BQn5Umalec5FeGpeEEopy4gJAHZ1ClahS8k"
		const MARVELCOINsgZ1ivT = await MARVELCOIN.new(uintKVuXVPf, stringGOZZEu, stringpvqSkC5, {from: accounts[2]});
		const uintaWm5W6q = BigInt("1789")
		const addresstYoFxh = accounts[2]
		const uinty22andS = BigInt("109")
		const addressAcpX0T2 = accounts[4]
		const address05IoWd = accounts[2]
//		const boolcRFqLnp = await MARVELCOINsgZ1ivT.burnFrom.call(addresstYoFxh, uintaWm5W6q, {from: accounts[3]});
//		const boolWQ4Ganv = await MARVELCOINsgZ1ivT.transferFrom.call(address05IoWd, addressAcpX0T2, uinty22andS, {from: accounts[1]});

		await expect(MARVELCOINsgZ1ivT.burnFrom.call(addresstYoFxh, uintaWm5W6q, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintaeBztRd = BigInt("432")
		const stringm4N0aC = "LYkr15Wrxr75JrPS5Gc54cDnQdUL1"
		const stringsvcVul = "OdGB39DIh3TQYA8sn7ztJ6nvs6nEw8lgJ6e52WoDuReZ9Nf5Hm9vgqlsKF4c"
		const MARVELCOINe8ZvpH9 = await MARVELCOIN.new(uintaeBztRd, stringm4N0aC, stringsvcVul, {from: "0x0000000000000000000000000000000000000001"});
		const uintEwUR1t = BigInt("146")
		const addressmmwkorx = accounts[4]
		const uintcJR9u1 = BigInt("47")
		const addresstYsGhD = accounts[5]
		const addressslVPAdc = accounts[4]
		const uintHXXEhIc = BigInt("1233")
		const addressI6O79Iz = accounts[5]
		const uintCMbuhGP = BigInt("1790")
		const addresswyHRI5T = accounts[2]
		const uintXpx69Tu = BigInt("1925")
		const boolWAANcN9 = await MARVELCOINe8ZvpH9.approve.call(addressmmwkorx, uintEwUR1t, {from: accounts[3]});
		const boolxVcfohx = await MARVELCOINe8ZvpH9.transferFrom.call(addressslVPAdc, addresstYsGhD, uintcJR9u1, {from: accounts[2]});
		const boolid3kj8I = await MARVELCOINe8ZvpH9.approve.call(addressI6O79Iz, uintHXXEhIc, {from: accounts[3]});
		const boolAHAkWTI = await MARVELCOINe8ZvpH9.transfer.call(addresswyHRI5T, uintCMbuhGP, {from: accounts[4]});
		const boolVyaLHw = await MARVELCOINe8ZvpH9.burn.call(uintXpx69Tu, {from: accounts[2]});
	});

	it('test for MARVELCOIN', async () => {
		const uintuhy96mT = BigInt("406")
		const stringLIwQ6mZ = "zIVXf49fxBTRxouSQmTcrOgapVpMT"
		const stringx5fk0RH = "W5bNiNFmeQov2L5f4dkPkENHDr9byFt4ASEdSbC8nGBYp8wi4xre5pwlvqRkcrrSFdMYe6pfapuJX9zF0zJ5OJrhwCnyknQWmLn"
		const MARVELCOINMtdYbi = await MARVELCOIN.new(uintuhy96mT, stringLIwQ6mZ, stringx5fk0RH, {from: accounts[3]});
		const uintUXslFdD = BigInt("681")
		const addressNyBGt7v = accounts[0]
		const uintq8BvSll = BigInt("186")
		const addresseXktNs = accounts[1]
		const uintEvFivee = BigInt("1858")
		const addressX7dobzE = accounts[3]
		const uintEu8sTHO = BigInt("621")
		const uintVryn6G = BigInt("276")
		const boolV918r7s = await MARVELCOINMtdYbi.transfer.call(addressNyBGt7v, uintUXslFdD, {from: accounts[3]});
		const boolGDHM36z = await MARVELCOINMtdYbi.approve.call(addresseXktNs, uintq8BvSll, {from: accounts[4]});
//		const boolMWCtf8q = await MARVELCOINMtdYbi.transfer.call(addressX7dobzE, uintEvFivee, {from: accounts[4]});
//		const bool7WPIbY = await MARVELCOINMtdYbi.burn.call(uintEu8sTHO, {from: accounts[3]});
//		const boolJhtLJ7o = await MARVELCOINMtdYbi.burn.call(uintVryn6G, {from: accounts[3]});

		assert.equal(boolGDHM36z, true)
		assert.equal(boolV918r7s, true)
		await expect(MARVELCOINMtdYbi.transfer.call(addressX7dobzE, uintEvFivee, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})