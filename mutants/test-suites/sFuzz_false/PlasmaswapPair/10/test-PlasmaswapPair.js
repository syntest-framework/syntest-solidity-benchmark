const PlasmaswapPair = artifacts.require("PlasmaswapPair");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PlasmaswapPair', (accounts) => {
	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairQ2PhguN = await PlasmaswapPair.new({from: accounts[2]});
		const addressWZjDuU1 = accounts[0]
		const byte8TGq4P = "0x0511"
		const addresshIe7fon = accounts[1]
		const uintnKjIggs = BigInt("469")
		const uintlbvob3T = BigInt("447")
		const addressFEuWOi = "0x0000000000000000000000000000000000000001"
		const addresseP12FND = accounts[2]
		const addressIpqohQK = accounts[0]
		const bytedWdTGlB = "0x0c181b080d051c140d1707041019"
		const addressJazTTvG = accounts[2]
		const uintDV3YEA = BigInt("1472")
		const uintSX8lu32 = BigInt("1621")
//		const uintc1iL8Iy = await PlasmaswapPairQ2PhguN.burn.call(addressWZjDuU1, {from: accounts[4]});
//		const uint5T8Hi8 = await PlasmaswapPairQ2PhguN.swap.call(uintlbvob3T, uintnKjIggs, addresshIe7fon, byte8TGq4P, {from: accounts[4]});
//		await PlasmaswapPairQ2PhguN.lock.call({from: accounts[1]});
//		const uintQVfBdyi = await PlasmaswapPairQ2PhguN.mint.call(addressFEuWOi, {from: accounts[5]});
//		const addressUTgtk7V = await PlasmaswapPairQ2PhguN.initialize.call(addressIpqohQK, addresseP12FND, {from: accounts[4]});
//		const uintrq2r86o = await PlasmaswapPairQ2PhguN.swap.call(uintSX8lu32, uintDV3YEA, addressJazTTvG, bytedWdTGlB, {from: accounts[4]});

		await expect(PlasmaswapPairQ2PhguN.burn.call(addressWZjDuU1, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairZEAXRjC = await PlasmaswapPair.new({from: accounts[1]});
		const addressQCpS99u = accounts[2]
		const addressqjVkhN8 = accounts[1]
//		await PlasmaswapPairZEAXRjC.sync.call({from: accounts[0]});
//		await PlasmaswapPairZEAXRjC.lock.call({from: accounts[1]});
//		const uintLG7z5K8 = await PlasmaswapPairZEAXRjC.burn.call(addressQCpS99u, {from: accounts[4]});
//		await PlasmaswapPairZEAXRjC.sync.call({from: accounts[2]});
//		const uintTntyYgI = await PlasmaswapPairZEAXRjC.burn.call(addressqjVkhN8, {from: accounts[4]});
//		await PlasmaswapPairZEAXRjC.lock.call({from: accounts[1]});

		await expect(PlasmaswapPairZEAXRjC.sync.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairHuuQSXK = await PlasmaswapPair.new({from: accounts[1]});
		const addressJm5oekK = accounts[1]
		const byteAZQDVi = "0x02051b00151e1d081a0803010f1a1e1619121d070c0811110b150211050202"
		const addressEQFvEUZ = accounts[0]
		const uintVR0Awu = BigInt("1321")
		const uintRFh1aJI = BigInt("190")
//		await PlasmaswapPairHuuQSXK.lock.call({from: accounts[3]});
//		const uintb7Y9mV = await PlasmaswapPairHuuQSXK.mint.call(addressJm5oekK, {from: accounts[1]});
//		const uintPwcVJc = await PlasmaswapPairHuuQSXK.swap.call(uintRFh1aJI, uintVR0Awu, addressEQFvEUZ, byteAZQDVi, {from: accounts[0]});
//		await PlasmaswapPairHuuQSXK.sync.call({from: accounts[1]});
//		await PlasmaswapPairHuuQSXK.sync.call({from: accounts[3]});

		await expect(PlasmaswapPairHuuQSXK.lock.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairXUFanQK = await PlasmaswapPair.new({from: "0x0000000000000000000000000000000000000001"});
		const addressQTZsXdQ = accounts[5]
		const addressGAYhPE6 = accounts[2]
		const addressGGAzgP8 = accounts[1]
		const addresssVSiA3N = accounts[1]
		const uintau9wBS4 = await PlasmaswapPairXUFanQK.mint.call(addressQTZsXdQ, {from: accounts[3]});
		await PlasmaswapPairXUFanQK.lock.call({from: accounts[1]});
		const addresssSa9yS = await PlasmaswapPairXUFanQK.skim.call(addressGAYhPE6, {from: "0x0000000000000000000000000000000000000001"});
		const uintHUt8XN5 = await PlasmaswapPairXUFanQK.burn.call(addressGGAzgP8, {from: accounts[0]});
		const uintq4zy45C = await PlasmaswapPairXUFanQK.mint.call(addresssVSiA3N, {from: accounts[2]});
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPair83bgyk = await PlasmaswapPair.new({from: accounts[4]});
		const addressBpQ85g = accounts[5]
		const addressTyujlxi = accounts[2]
		const addressZ8LynaL = accounts[3]
		const addressVWvqpy = accounts[2]
		const addressPdc8gc = accounts[1]
		const addressyiK8YdR = accounts[3]
//		const addresssaJ5q9W = await PlasmaswapPair83bgyk.initialize.call(addressTyujlxi, addressBpQ85g, {from: accounts[1]});
//		const uint112vIYGWYa = await PlasmaswapPair83bgyk.getReserves.call({from: accounts[2]});
//		const uintMH6LrH4 = await PlasmaswapPair83bgyk.burn.call(addressZ8LynaL, {from: accounts[1]});
//		const addresswwx4Hlb = await PlasmaswapPair83bgyk.initialize.call(addressPdc8gc, addressVWvqpy, {from: accounts[5]});
//		const addressEDpz1U = await PlasmaswapPair83bgyk.skim.call(addressyiK8YdR, {from: accounts[1]});

		await expect(PlasmaswapPair83bgyk.initialize.call(addressTyujlxi, addressBpQ85g, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairmy1hP2 = await PlasmaswapPair.new({from: accounts[5]});
		const addressmoHyJPy = accounts[3]
		const addresst5adYei = accounts[0]
//		const uintuvL9QO = await PlasmaswapPairmy1hP2.mint.call(addressmoHyJPy, {from: accounts[3]});
//		const addressBirijwM = await PlasmaswapPairmy1hP2.skim.call(addresst5adYei, {from: "0x0000000000000000000000000000000000000001"});
//		const uint112g21zG0A = await PlasmaswapPairmy1hP2.getReserves.call({from: accounts[3]});
//		const uint112IhKjeq = await PlasmaswapPairmy1hP2.getReserves.call({from: accounts[3]});

		await expect(PlasmaswapPairmy1hP2.mint.call(addressmoHyJPy, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairOfkedKH = await PlasmaswapPair.new({from: accounts[3]});
		const bytebtJo7UT = "0x1d101a161d05131005110e100f17"
		const addresslXi5ZFf = accounts[0]
		const uintWE9rvwu = BigInt("787")
		const uintL0VsBT6 = BigInt("1725")
		const addressdsuOtre = "0x0000000000000000000000000000000000000002"
		const uint112j1YlmHT = await PlasmaswapPairOfkedKH.getReserves.call({from: accounts[4]});
//		const uintaq2WjfJ = await PlasmaswapPairOfkedKH.swap.call(uintL0VsBT6, uintWE9rvwu, addresslXi5ZFf, bytebtJo7UT, {from: accounts[0]});
//		const uint112saIXqVN = await PlasmaswapPairOfkedKH.getReserves.call({from: accounts[3]});
//		const uintL8gv65A = await PlasmaswapPairOfkedKH.burn.call(addressdsuOtre, {from: accounts[1]});
//		const uint112DnQmqWO = await PlasmaswapPairOfkedKH.getReserves.call({from: accounts[1]});

		await expect(PlasmaswapPairOfkedKH.swap.call(uintL0VsBT6, uintWE9rvwu, addresslXi5ZFf, bytebtJo7UT, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PlasmaswapPair', async () => {
		const PlasmaswapPairOfkedKH = await PlasmaswapPair.new({from: accounts[3]});
		const addressrhpi9OH = accounts[4]
//		const addressIS7fDd4 = await PlasmaswapPairOfkedKH.skim.call(addressrhpi9OH, {from: accounts[4]});
//		const uint112j1YlmHT = await PlasmaswapPairOfkedKH.getReserves.call({from: accounts[4]});

		await expect(PlasmaswapPairOfkedKH.skim.call(addressrhpi9OH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})