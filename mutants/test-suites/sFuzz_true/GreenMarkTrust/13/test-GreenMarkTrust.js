const GreenMarkTrust = artifacts.require("GreenMarkTrust");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GreenMarkTrust', (accounts) => {
	it('test for GreenMarkTrust', async () => {
		const uintAHw8I0m = BigInt("1132")
		const stringYNS8C9m = "LiHjbirvGy8boYrtpphdcCqtAlrxXiaoShaGVDvXVV6ryOqC"
		const stringTRxhEF = "3EOX"
		const GreenMarkTrustyBYi7eV = await GreenMarkTrust.new(uintAHw8I0m, stringYNS8C9m, stringTRxhEF, {from: accounts[5]});
		const uintEUgMJ1L = BigInt("398")
		const addressb2n5gD = accounts[0]
		const addressxNgbxVC = accounts[4]
		const uintG1HFNIQ = BigInt("1342")
		const addressxkzgaj1 = accounts[2]
		const addressBTpUlGw = accounts[1]
		const uintbhQOJ1o = BigInt("651")
		const byteaDLMt0l = "0x08191b0618050418160f0d10130a1f1215071a"
		const uintilWOQE = BigInt("2035")
		const addressH9fxSEA = "0x0000000000000000000000000000000000000001"
		const byteBbx5oGF = "0x181a180f0d08120d0215110018100f1f1c1918090c191a12"
		const uintC1w4fJM = BigInt("168")
		const addressmFjHmpD = accounts[1]
//		const boolhc536Zt = await GreenMarkTrustyBYi7eV.transferFrom.call(addressxNgbxVC, addressb2n5gD, uintEUgMJ1L, {from: accounts[4]});
//		const boolxpeOPP4 = await GreenMarkTrustyBYi7eV.transferFrom.call(addressBTpUlGw, addressxkzgaj1, uintG1HFNIQ, {from: "0x0000000000000000000000000000000000000001"});
//		const boolxjWZCmb = await GreenMarkTrustyBYi7eV.burn.call(uintbhQOJ1o, {from: accounts[3]});
//		const boolbDnrqF6 = await GreenMarkTrustyBYi7eV.approveAndCall.call(addressH9fxSEA, uintilWOQE, byteaDLMt0l, {from: accounts[3]});
//		const booldLmt3fu = await GreenMarkTrustyBYi7eV.approveAndCall.call(addressmFjHmpD, uintC1w4fJM, byteBbx5oGF, {from: accounts[4]});

		await expect(GreenMarkTrustyBYi7eV.transferFrom.call(addressxNgbxVC, addressb2n5gD, uintEUgMJ1L, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintqwKyVKO = BigInt("912")
		const stringDnyC9Wz = "etv1R37CpOa6es35G6vrjswdMrZHzqf5gYryFZKTG5xipWpBkbpv3413cl2kt8XQEBdKoNWt2u2iCgrX"
		const stringHq2wEfO = "VOtSEkbEaUNVzvTMDfv7PtzMsXECzJfo9swyhXipfewScz5Fcq7KnKaVRavtGFTvAUHGCsxfeIO5vxpE9X3qGJP61"
		const GreenMarkTrustnpK8KJD = await GreenMarkTrust.new(uintqwKyVKO, stringDnyC9Wz, stringHq2wEfO, {from: accounts[2]});
		const uintw82kBYo = BigInt("1083")
		const uintlRKMZt7 = BigInt("134")
		const uintureOQwe = BigInt("1271")
		const addressjBlcHUh = accounts[1]
		const addressRG3jIQp = accounts[0]
		const byteI306aU3 = "0x1c1b0a14020c050f"
		const uintiMVOiWO = BigInt("413")
		const addressc8R8xRa = accounts[3]
		const uintukKXXsu = BigInt("889")
		const addressy839kPm = accounts[2]
		const bytej6dvMKa = "0x18021619040e"
		const uintIQbTt0M = BigInt("1416")
		const addressELVp4zc = accounts[4]
//		const boolaqEU7dt = await GreenMarkTrustnpK8KJD.burn.call(uintw82kBYo, {from: accounts[4]});
//		const boolIem0QZb = await GreenMarkTrustnpK8KJD.burn.call(uintlRKMZt7, {from: accounts[4]});
//		const boolcksQmGE = await GreenMarkTrustnpK8KJD.transferFrom.call(addressRG3jIQp, addressjBlcHUh, uintureOQwe, {from: accounts[5]});
//		const boolrfMLTc = await GreenMarkTrustnpK8KJD.approveAndCall.call(addressc8R8xRa, uintiMVOiWO, byteI306aU3, {from: accounts[5]});
//		const boolfdtZZff = await GreenMarkTrustnpK8KJD.approve.call(addressy839kPm, uintukKXXsu, {from: accounts[4]});
//		const boolkihYsXN = await GreenMarkTrustnpK8KJD.approveAndCall.call(addressELVp4zc, uintIQbTt0M, bytej6dvMKa, {from: accounts[4]});

		await expect(GreenMarkTrustnpK8KJD.burn.call(uintw82kBYo, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintJEYFaWp = BigInt("1208")
		const stringZRaYRjQ = "nSwz1e3wTdGTs1HTOZw5mlHjWwahFKBRuGhqAWilqaaZYJim0YLEHEbu9zaRf3"
		const stringZkYCdeR = "PjAcaMsDHXydJXz4mogwbYTjUdD4lVmMJ"
		const GreenMarkTrustwFDO98 = await GreenMarkTrust.new(uintJEYFaWp, stringZRaYRjQ, stringZkYCdeR, {from: accounts[2]});
		const uintew544Y = BigInt("166")
		const addressXO99ZQw = accounts[2]
		const uintztRW2TH = BigInt("764")
		const uintksC0EDf = BigInt("1159")
		const uintQpii55a = BigInt("569")
		const addresshsCdpZr = accounts[2]
		const bool43jQj2 = await GreenMarkTrustwFDO98.approve.call(addressXO99ZQw, uintew544Y, {from: "0x0000000000000000000000000000000000000001"});
//		const boolu4AJhai = await GreenMarkTrustwFDO98.burn.call(uintztRW2TH, {from: accounts[3]});
//		const boolHwcEZLu = await GreenMarkTrustwFDO98.burn.call(uintksC0EDf, {from: accounts[4]});
//		const boolZyxvJM = await GreenMarkTrustwFDO98.burnFrom.call(addresshsCdpZr, uintQpii55a, {from: accounts[1]});

		assert.equal(bool43jQj2, true)
		await expect(GreenMarkTrustwFDO98.burn.call(uintztRW2TH, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintU71N772 = BigInt("1650")
		const stringhiGxHZn = "cEXwXhDPXJCtIoauR1w2pqKl0zD1o5lstd1sD"
		const string8dKqj7 = "xOX9vzBeDO4MCCikRxdwFTYDjB8EWk3c9Pm7jXtcl6AjFsPzKpej5vWpXoiGa"
		const GreenMarkTrustsYZyP11 = await GreenMarkTrust.new(uintU71N772, stringhiGxHZn, string8dKqj7, {from: accounts[1]});
		const byteOqv2qGn = "0x1c1813"
		const uintzknxCBp = BigInt("212")
		const addressA6eZUlf = accounts[0]
		const uintrRrkKzu = BigInt("655")
		const address2dWWi9 = accounts[2]
		const addresspldaGPI = accounts[0]
		const uintGcpZzNH = BigInt("1903")
		const uintK3vHPM = BigInt("1195")
		const addressOV76WMb = accounts[5]
		const addressAaDynAh = accounts[1]
		const uintUieBmDl = BigInt("1092")
		const addressgZeK898 = accounts[2]
//		const boolAfaOUzQ = await GreenMarkTrustsYZyP11.approveAndCall.call(addressA6eZUlf, uintzknxCBp, byteOqv2qGn, {from: accounts[1]});
//		const boolSDXmHNv = await GreenMarkTrustsYZyP11.transferFrom.call(addresspldaGPI, address2dWWi9, uintrRrkKzu, {from: accounts[5]});
//		const boolsXEFzte = await GreenMarkTrustsYZyP11.burn.call(uintGcpZzNH, {from: accounts[0]});
//		const boolvHRWz3Y = await GreenMarkTrustsYZyP11.transferFrom.call(addressAaDynAh, addressOV76WMb, uintK3vHPM, {from: accounts[2]});
//		const boolpK3z0bi = await GreenMarkTrustsYZyP11.burnFrom.call(addressgZeK898, uintUieBmDl, {from: accounts[3]});

		await expect(GreenMarkTrustsYZyP11.approveAndCall.call(addressA6eZUlf, uintzknxCBp, byteOqv2qGn, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintleYFftr = BigInt("1835")
		const stringaOh3aj = "S3KBwkFfWKr3SISsU4J9IGRJM6DRb"
		const stringUfSFlYm = "pOlHsuFJqAxP4Zbp1bQYVKbwoowjzBF9an8wB1ykKnHyX3bQwDgnKbtmqB6mbNLhpGdNIxgA9fwI78WMFj2m7pDOxOTlvO"
		const GreenMarkTrust94WuAa = await GreenMarkTrust.new(uintleYFftr, stringaOh3aj, stringUfSFlYm, {from: accounts[3]});
		const uintTx6BjBd = BigInt("801")
		const addressFvgvGvl = accounts[3]
		const uintz8qwDiK = BigInt("1159")
		const address9Q9tpC = accounts[4]
		const byteyTTZ0DM = "0x181a1c100b1f171516"
		const uintQ8O0sGE = BigInt("1308")
		const addressWwqYooY = accounts[4]
		const boolWs1gKKo = await GreenMarkTrust94WuAa.approve.call(addressFvgvGvl, uintTx6BjBd, {from: accounts[4]});
//		const boolNs0Ea4V = await GreenMarkTrust94WuAa.transfer.call(address9Q9tpC, uintz8qwDiK, {from: "0x0000000000000000000000000000000000000001"});
//		const boolAvpt2uy = await GreenMarkTrust94WuAa.approveAndCall.call(addressWwqYooY, uintQ8O0sGE, byteyTTZ0DM, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolWs1gKKo, true)
		await expect(GreenMarkTrust94WuAa.transfer.call(address9Q9tpC, uintz8qwDiK, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintmFIVVNp = BigInt("495")
		const stringeD1VlNI = "8emuXIefM0ulVlqWvBtVU8neaaRCtE3JQo9nZqeFVegPv6NQRil49dcKy8hnvdOAkXxCPZUBwkeolKgIZVHmQ"
		const stringivKrGk = "is6ORGRluESjl4wCftCCUAddVo5AaqoljSLGB5w16ndOAfmC"
		const GreenMarkTrustYNNMqaF = await GreenMarkTrust.new(uintmFIVVNp, stringeD1VlNI, stringivKrGk, {from: "0x0000000000000000000000000000000000000001"});
		const bytep6NrVJ1 = "0x0f1d1e06190e0715"
		const uintiPTcfcI = BigInt("1296")
		const addressG0ycO1t = accounts[1]
		const uintyxNZW3d = BigInt("972")
		const addressHtNhZm = accounts[4]
		const addressW8Nite5 = accounts[0]
		const uinthdCDrgn = BigInt("1309")
		const boolBlMH8qn = await GreenMarkTrustYNNMqaF.approveAndCall.call(addressG0ycO1t, uintiPTcfcI, bytep6NrVJ1, {from: accounts[5]});
		const boolttawPaR = await GreenMarkTrustYNNMqaF.transferFrom.call(addressW8Nite5, addressHtNhZm, uintyxNZW3d, {from: accounts[4]});
		const boolR1O9tvf = await GreenMarkTrustYNNMqaF.burn.call(uinthdCDrgn, {from: accounts[0]});
	});

	it('test for GreenMarkTrust', async () => {
		const uintssxtP5O = BigInt("1406")
		const stringldS8Jcj = "XY6e5QbP17F9fz4qxOJFi305t3CPVkPh7dWqQtck0mZ"
		const stringynypcpx = "0UqAK6tNrASnjY16ZqlKS"
		const GreenMarkTrustOiJVmB = await GreenMarkTrust.new(uintssxtP5O, stringldS8Jcj, stringynypcpx, {from: accounts[3]});
		const uintpWaVABG = BigInt("915")
		const uint0ScMdG = BigInt("112")
		const addressJlRVm53 = accounts[0]
		const addressh5dNVaV = accounts[0]
		const uintAnpFgp3 = BigInt("325")
		const addressuQ99zDu = accounts[5]
		const addressev0efB = accounts[1]
		const uintkDzHZj = BigInt("1754")
		const boolZKbU5rC = await GreenMarkTrustOiJVmB.burn.call(uintpWaVABG, {from: accounts[3]});
//		const boolQaa38uv = await GreenMarkTrustOiJVmB.transferFrom.call(addressh5dNVaV, addressJlRVm53, uint0ScMdG, {from: accounts[2]});
//		const boolyUV3m7B = await GreenMarkTrustOiJVmB.transferFrom.call(addressev0efB, addressuQ99zDu, uintAnpFgp3, {from: accounts[4]});
//		const boolB1G6g7S = await GreenMarkTrustOiJVmB.burn.call(uintkDzHZj, {from: accounts[0]});

		assert.equal(boolZKbU5rC, true)
		await expect(GreenMarkTrustOiJVmB.transferFrom.call(addressh5dNVaV, addressJlRVm53, uint0ScMdG, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintlUtG3vQ = BigInt("1406")
		const stringldS8Jcj = "XY6e5QbP17F9fz4qxOJFi305t3CPVkPh7dWqQtck0mZ"
		const stringynypcpx = "0UqAK6tNrASnjY16ZqlKS"
		const GreenMarkTrustOiJVmB = await GreenMarkTrust.new(uintlUtG3vQ, stringldS8Jcj, stringynypcpx, {from: accounts[3]});
		const uintwG6vrd2 = BigInt("1011")
		const addresslHxCznf = accounts[2]
		const uintRv2Xz2f = BigInt("112")
		const addressxuuRmQI = accounts[0]
		const addressCj1Nr98 = accounts[0]
		const uintfI9KEqj = BigInt("1087")
		const uintekMijyY = BigInt("1006")
		const uint5koxUw = BigInt("1500")
//		const boolxmPGoiq = await GreenMarkTrustOiJVmB.burnFrom.call(addresslHxCznf, uintwG6vrd2, {from: accounts[1]});
//		const boolQaa38uv = await GreenMarkTrustOiJVmB.transferFrom.call(addressCj1Nr98, addressxuuRmQI, uintRv2Xz2f, {from: accounts[2]});
//		const boolW6hUtVS = await GreenMarkTrustOiJVmB.burn.call(uintfI9KEqj, {from: accounts[0]});
//		const boolB1G6g7S = await GreenMarkTrustOiJVmB.burn.call(uintekMijyY, {from: accounts[0]});
//		const booltCGkvIj = await GreenMarkTrustOiJVmB.burn.call(uint5koxUw, {from: accounts[4]});

		await expect(GreenMarkTrustOiJVmB.burnFrom.call(addresslHxCznf, uintwG6vrd2, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintfzkolJ = BigInt("1406")
		const stringldS8Jcj = "XY6e5QbP17F9fz4qxOJFi305t3CPVkPh7dWqQtck0mZ"
		const stringynypcpx = "0UqAK6tNrASnjY16ZqlKS"
		const GreenMarkTrustOiJVmB = await GreenMarkTrust.new(uintfzkolJ, stringldS8Jcj, stringynypcpx, {from: accounts[3]});
		const uint0axcyp = BigInt("1011")
		const addressww4SZKs = accounts[3]
		const uintCQuWsH = BigInt("1500")
//		const boolxmPGoiq = await GreenMarkTrustOiJVmB.burnFrom.call(addressww4SZKs, uint0axcyp, {from: accounts[1]});
//		const booltCGkvIj = await GreenMarkTrustOiJVmB.burn.call(uintCQuWsH, {from: accounts[4]});

		await expect(GreenMarkTrustOiJVmB.burnFrom.call(addressww4SZKs, uint0axcyp, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintCjE2DLv = BigInt("1418")
		const stringK7MGlTc = "j5EGJOQbrgDmyhtMOCBuG9PLTo7KMTFU5l7WNq"
		const stringIAvpCIL = "6lJkfGGfdU9bSRGVTWVeNYSIAlaa7kjxjJLvBbAqNTTu1"
		const GreenMarkTrustuREahD = await GreenMarkTrust.new(uintCjE2DLv, stringK7MGlTc, stringIAvpCIL, {from: accounts[4]});
		const uintibki36l = BigInt("1887")
		const addresslF3AKQM = accounts[0]
		const uintd4XGYws = BigInt("280")
		const addressYjeaM97 = accounts[0]
		const addressTZezpWy = accounts[2]
		const boolQCp7zvw = await GreenMarkTrustuREahD.transfer.call(addresslF3AKQM, uintibki36l, {from: accounts[4]});
//		const boolNDvaQZd = await GreenMarkTrustuREahD.transferFrom.call(addressTZezpWy, addressYjeaM97, uintd4XGYws, {from: accounts[0]});

		assert.equal(boolQCp7zvw, true)
		await expect(GreenMarkTrustuREahD.transferFrom.call(addressTZezpWy, addressYjeaM97, uintd4XGYws, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})