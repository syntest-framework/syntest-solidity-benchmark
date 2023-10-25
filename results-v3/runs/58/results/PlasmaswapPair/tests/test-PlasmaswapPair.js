const PlasmaswapPair = artifacts.require("PlasmaswapPair");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PlasmaswapPair', (accounts) => {
	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairMonkBMd = await PlasmaswapPair.new({from: accounts[3]});
		const addressORc3knp = "0x0000000000000000000000000000000000000001"
		const addressUzD5Hw4 = accounts[3]
		const byteZetgugU = "0x1f190d190b1218200108010b14051413151504140d00022017121d180c0306"
		const addressp5VU4Gg = accounts[5]
		const uintWMrfarg = BigInt("982")
		const uintspdsoni = BigInt("1790")
		const byteVughMeV = "0x161f16171810140319180619101d170b0b1812"
		const addressn8Px0jx = accounts[0]
		const uintSv71sx = BigInt("1503")
		const uintzSFrxM = BigInt("335")
		const uintdZSd1WJ = await PlasmaswapPairMonkBMd.mint.call(addressORc3knp, {from: accounts[3]});
		const uint112pV3rtzZ = await PlasmaswapPairMonkBMd.getReserves.call({from: accounts[2]});
		const uint112Q0zglI7 = await PlasmaswapPairMonkBMd.getReserves.call({from: "0x0000000000000000000000000000000000000001"});
		const uintjVE4Kjs = await PlasmaswapPairMonkBMd.mint.call(addressUzD5Hw4, {from: accounts[3]});
		const uintCuN3SRR = await PlasmaswapPairMonkBMd.swap.call(uintspdsoni, uintWMrfarg, addressp5VU4Gg, byteZetgugU, {from: accounts[1]});
		const uintmvxhtpd = await PlasmaswapPairMonkBMd.swap.call(uintzSFrxM, uintSv71sx, addressn8Px0jx, byteVughMeV, {from: accounts[1]});

		await expect(PlasmaswapPairMonkBMd.mint.call(addressORc3knp, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairMf5oNgj = await PlasmaswapPair.new({from: accounts[1]});
		const byteher0tGJ = "0x14111909161e0710110c1a1e020c191614170119181b19"
		const addressTEjgrUK = "0x0000000000000000000000000000000000000001"
		const uintgCTGyv = BigInt("36")
		const uinttNhkdLC = BigInt("1905")
		const uintRklL4Xc = await PlasmaswapPairMf5oNgj.swap.call(uinttNhkdLC, uintgCTGyv, addressTEjgrUK, byteher0tGJ, {from: accounts[3]});
		const uint112WpP0WRu = await PlasmaswapPairMf5oNgj.getReserves.call({from: accounts[4]});

		await expect(PlasmaswapPairMf5oNgj.swap.call(uinttNhkdLC, uintgCTGyv, addressTEjgrUK, byteher0tGJ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairoRRVBUH = await PlasmaswapPair.new({from: "0x0000000000000000000000000000000000000001"});
		const addressq9uWsjd = accounts[2]
		const addressVm4Kqo = accounts[2]
		const byteSnMn3hS = "0x150901141d171f090209"
		const addressV3yive = accounts[3]
		const uintcrkQ6VP = BigInt("1300")
		const uintic6GCPD = BigInt("622")
		const addressBQi3Woy = accounts[2]
		const addressZNBUSl3 = accounts[2]
		const addressSIevPT = accounts[3]
		const byteGMwupi = "0x06161101180d141411031008140f"
		const addressm0X6zw6 = accounts[1]
		const uintGn40rsi = BigInt("761")
		const uintqiCaWqs = BigInt("826")
		const addressWcmUsDF = await PlasmaswapPairoRRVBUH.initialize.call(addressVm4Kqo, addressq9uWsjd, {from: accounts[3]});
		const uintON8ba03 = await PlasmaswapPairoRRVBUH.swap.call(uintic6GCPD, uintcrkQ6VP, addressV3yive, byteSnMn3hS, {from: accounts[2]});
		const uintT7PXwJH = await PlasmaswapPairoRRVBUH.burn.call(addressBQi3Woy, {from: accounts[2]});
		const uintYbheb6 = await PlasmaswapPairoRRVBUH.mint.call(addressZNBUSl3, {from: "0x0000000000000000000000000000000000000001"});
		const addressqIf7rYg = await PlasmaswapPairoRRVBUH.skim.call(addressSIevPT, {from: accounts[4]});
		const uintz8hjiVs = await PlasmaswapPairoRRVBUH.swap.call(uintqiCaWqs, uintGn40rsi, addressm0X6zw6, byteGMwupi, {from: accounts[2]});
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairTBEHpUl = await PlasmaswapPair.new({from: accounts[0]});
		const addressBUGahTT = "0x0000000000000000000000000000000000000001"
		const addressBnbKtHh = accounts[4]
		const addressgpa3R7 = accounts[3]
		const addressvZQ4IGs = accounts[0]
		const addressAOucLGb = accounts[4]
		const addressWCniCkw = accounts[1]
		await PlasmaswapPairTBEHpUl.lock.call({from: accounts[2]});
		const addressbO1YS5n = await PlasmaswapPairTBEHpUl.initialize.call(addressBnbKtHh, addressBUGahTT, {from: accounts[2]});
		const addressr9Gq4Em = await PlasmaswapPairTBEHpUl.skim.call(addressgpa3R7, {from: "0x0000000000000000000000000000000000000001"});
		const uintbLBdCAP = await PlasmaswapPairTBEHpUl.mint.call(addressvZQ4IGs, {from: accounts[2]});
		const uintQEYxepI = await PlasmaswapPairTBEHpUl.burn.call(addressAOucLGb, {from: accounts[2]});
		const addressg73BSak = await PlasmaswapPairTBEHpUl.skim.call(addressWCniCkw, {from: accounts[1]});

		await expect(PlasmaswapPairTBEHpUl.lock.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairDXo2LW6 = await PlasmaswapPair.new({from: accounts[2]});
		const addresssl2uGe1 = accounts[0]
		const addressgGZsPa = accounts[4]
		const addressT0fuLPf = accounts[0]
		const addresst1MtzLU = await PlasmaswapPairDXo2LW6.skim.call(addresssl2uGe1, {from: accounts[3]});
		const uintNEc1gu5 = await PlasmaswapPairDXo2LW6.mint.call(addressgGZsPa, {from: accounts[2]});
		const uintEJNwyj7 = await PlasmaswapPairDXo2LW6.burn.call(addressT0fuLPf, {from: accounts[4]});
		const uint112teOwfnd = await PlasmaswapPairDXo2LW6.getReserves.call({from: accounts[0]});
		await PlasmaswapPairDXo2LW6.sync.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(PlasmaswapPairDXo2LW6.skim.call(addresssl2uGe1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairfSe0Ez6 = await PlasmaswapPair.new({from: accounts[4]});
		const addressn5kWF95 = accounts[2]
		const addressnYbnAxh = accounts[2]
		const addressy4RLffT = accounts[2]
		const addressfPA9nzB = accounts[2]
		const uintyqkx9MB = await PlasmaswapPairfSe0Ez6.burn.call(addressn5kWF95, {from: accounts[4]});
		const uintQ4qTQS = await PlasmaswapPairfSe0Ez6.burn.call(addressnYbnAxh, {from: accounts[1]});
		const addressDQKje4p = await PlasmaswapPairfSe0Ez6.initialize.call(addressfPA9nzB, addressy4RLffT, {from: accounts[0]});

		await expect(PlasmaswapPairfSe0Ez6.burn.call(addressn5kWF95, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairMf5oNgj = await PlasmaswapPair.new({from: accounts[1]});
		const addresskqHPYT3 = accounts[3]
		const addressr6xomvz = accounts[5]
		const addressd5ZIp0 = accounts[3]
		const addressJy3SO7k = accounts[4]
		const bytez36X7Pf = "0x14111909161e0710110c1a1e020c191614170119181b19"
		const addressY01iyeM = "0x0000000000000000000000000000000000000001"
		const uintkTMHza9 = BigInt("68")
		const uintd86RHI = BigInt("1905")
		const addresskOy1TTb = await PlasmaswapPairMf5oNgj.initialize.call(addressr6xomvz, addresskqHPYT3, {from: "0x0000000000000000000000000000000000000001"});
		const uint112ygtTkJA = await PlasmaswapPairMf5oNgj.getReserves.call({from: accounts[3]});
		const addresslcs4wYj = await PlasmaswapPairMf5oNgj.initialize.call(addressJy3SO7k, addressd5ZIp0, {from: accounts[0]});
		const uintRklL4Xc = await PlasmaswapPairMf5oNgj.swap.call(uintd86RHI, uintkTMHza9, addressY01iyeM, bytez36X7Pf, {from: accounts[3]});

		await expect(PlasmaswapPairMf5oNgj.initialize.call(addressr6xomvz, addresskqHPYT3, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairMf5oNgj = await PlasmaswapPair.new({from: accounts[1]});
		const addressT3iBY7B = accounts[3]
		const addressYfBk1uO = accounts[0]
		const bytefXjS9u4 = "0x14111909161e0710110c1a1e020c191614170119181b19"
		const addressiyfMz2w = "0x0000000000000000000000000000000000000001"
		const uintYOFUKas = BigInt("67")
		const uintFzN3Bm = BigInt("1905")
		await PlasmaswapPairMf5oNgj.sync.call({from: accounts[0]});
		const addressILvasy = await PlasmaswapPairMf5oNgj.initialize.call(addressYfBk1uO, addressT3iBY7B, {from: accounts[1]});
		const uintRklL4Xc = await PlasmaswapPairMf5oNgj.swap.call(uintFzN3Bm, uintYOFUKas, addressiyfMz2w, bytefXjS9u4, {from: accounts[3]});

		await expect(PlasmaswapPairMf5oNgj.sync.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})