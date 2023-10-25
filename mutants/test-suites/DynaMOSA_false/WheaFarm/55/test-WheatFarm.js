const WheatFarm = artifacts.require("WheatFarm");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WheatFarm', (accounts) => {
	it('test for WheatFarm', async () => {
		const stringgUOzkpR = "uGDf4RkwQUuCG8hPhGI4EQW"
		const stringJKJDnI5 = "FbM3z7ECo5OxIE3lfF1F0SC1QWMR1FhOcxLLNHninKZRJlo8PnstTGTNndQHs1RVHU0ML64I6aWVDPpqXCAz2"
		const uintdR2SLas = BigInt("147")
		const WheatFarmMlykL5K = await WheatFarm.new(stringgUOzkpR, stringJKJDnI5, uintdR2SLas, {from: "0x0000000000000000000000000000000000000001"});
		const uintB8U2emP = BigInt("753")
		const addressA3U5ld = "0x0000000000000000000000000000000000000001"
		const uintdVUttw = BigInt("1508")
		const addressx9vk42b = accounts[2]
		const uintnFxHm0 = BigInt("370")
		const addressiDDylQo = accounts[0]
		const addressNBGu8wO = accounts[3]
		const uintzYIrbKT = BigInt("2004")
		const addressyxrxOmI = accounts[3]
		const addresstD9Qc2F = accounts[2]
		const boold4UCK5W = await WheatFarmMlykL5K.transfer.call(addressA3U5ld, uintB8U2emP, {from: accounts[3]});
		const boolYlRtDZt = await WheatFarmMlykL5K.transfer.call(addressx9vk42b, uintdVUttw, {from: accounts[0]});
		const booluEJjHdc = await WheatFarmMlykL5K.transferFrom.call(addressNBGu8wO, addressiDDylQo, uintnFxHm0, {from: accounts[2]});
		const booly9vaCxJ = await WheatFarmMlykL5K.approveAndCall.call(addressyxrxOmI, uintzYIrbKT, {from: accounts[3]});
		const uintPjbs3yk = await WheatFarmMlykL5K.balanceOf.call(addresstD9Qc2F, {from: accounts[4]});
	});

	it('test for WheatFarm', async () => {
		const stringBRkhurS = "JcOy5AP3higbJaAGl5WZif7Wss9dJPVX6c6dhslXyw2IUBHjSCdLyJD1N"
		const stringpI4KB17 = "Pkuw8Wr5woDIG8GHIv76XK6rYk7vVJtKgG0F6HuIQu5CGdsSzzPm0LbLz19C43q"
		const uintJvD6VVJ = BigInt("1570")
		const WheatFarmnlKv8PH = await WheatFarm.new(stringBRkhurS, stringpI4KB17, uintJvD6VVJ, {from: accounts[2]});
		const addressazdyAx = accounts[5]
		const uintVKcMcu = BigInt("1288")
		const addressXObsQLu = accounts[3]
//		const booln0Wn8T = await WheatFarmnlKv8PH.transferownership.call(addressazdyAx, {from: accounts[4]});
//		const boolCjub0Kd = await WheatFarmnlKv8PH.approve.call(addressXObsQLu, uintVKcMcu, {from: accounts[1]});

		await expect(WheatFarmnlKv8PH.transferownership.call(addressazdyAx, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringomarudI = "gwgK913wp"
		const stringmNNIpP3 = "bVbk8NvfOiNaWEIWLN8VfNd4CZCRjqucJjI42tvkxwr3QciDtmKz3b5lQktSgql74fnyS1FUjAVAqncOsBSF5xDcB"
		const uintyGjIjUO = BigInt("571")
		const WheatFarmiPu8m3J = await WheatFarm.new(stringomarudI, stringmNNIpP3, uintyGjIjUO, {from: accounts[0]});
		const uintX4rpGb = BigInt("469")
		const addressS051ncq = accounts[3]
		const addresshj3Ovaz = accounts[4]
		const uintasrMYFL = BigInt("1396")
		const addressiYtDg4a = "0x0000000000000000000000000000000000000001"
//		const boolC8K5t6t = await WheatFarmiPu8m3J.transfer.call(addressS051ncq, uintX4rpGb, {from: accounts[1]});
//		const uintBSvlrco = await WheatFarmiPu8m3J.balanceOf.call(addresshj3Ovaz, {from: accounts[1]});
//		const boolNetDWuZ = await WheatFarmiPu8m3J.increaseAllowance.call(addressiYtDg4a, uintasrMYFL, {from: accounts[4]});
//		const uintFGgtoJ1 = await WheatFarmiPu8m3J.totalSupply.call({from: accounts[4]});

		await expect(WheatFarmiPu8m3J.transfer.call(addressS051ncq, uintX4rpGb, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringxQTEi8 = "GssTxgkgys5XbbG3kd3tEFVOXI1KgotobAlM74SYC4t3du4Sx"
		const stringMkaFvF0 = "1RQxwjCeAsTRZozTcKTp2oHPkTcmfFp8yb3T3k"
		const uintD6pyIKy = BigInt("665")
		const WheatFarmE7eVtBe = await WheatFarm.new(stringxQTEi8, stringMkaFvF0, uintD6pyIKy, {from: accounts[2]});
		const uintO3E5HyD = BigInt("807")
		const addressMUGVXn = accounts[2]
		const uintfDo1iCU = BigInt("1798")
		const addressbeahDfH = accounts[5]
		const uintbhkmD3D = BigInt("610")
		const addressVvpa2u = accounts[1]
		const uintg7v4VDc = BigInt("1514")
		const addresszDTOd9 = accounts[0]
		const uintUedlmAd = BigInt("1692")
		const addresseTpPOcp = accounts[4]
		const addressLZ3z5h0 = accounts[2]
		const addressH23L4Ag = accounts[3]
		const bool9cjvUv = await WheatFarmE7eVtBe.approve.call(addressMUGVXn, uintO3E5HyD, {from: accounts[0]});
		const bool5YkJvF = await WheatFarmE7eVtBe.approve.call(addressbeahDfH, uintfDo1iCU, {from: accounts[0]});
//		const boolI6OjGxM = await WheatFarmE7eVtBe.transfer.call(addressVvpa2u, uintbhkmD3D, {from: accounts[5]});
//		const boolMmRrLq4 = await WheatFarmE7eVtBe.approve.call(addresszDTOd9, uintg7v4VDc, {from: accounts[3]});
//		const booln9TLSng = await WheatFarmE7eVtBe.transferFrom.call(addressLZ3z5h0, addresseTpPOcp, uintUedlmAd, {from: accounts[4]});
//		const uintGiWK1lO = await WheatFarmE7eVtBe.balanceOf.call(addressH23L4Ag, {from: accounts[5]});

		assert.equal(bool5YkJvF, true)
		assert.equal(bool9cjvUv, true)
		await expect(WheatFarmE7eVtBe.transfer.call(addressVvpa2u, uintbhkmD3D, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringZF9OfOz = "W4uvJJRptYwak5kSG8pRz6wrA9yTxtbnqTHFZ6h"
		const stringbDKtfKo = "Nm06u7zrrEopLUS3pDogMRfQIrlo1eHAo4QZgUzm9h2lRV8ubmZfAEmkoWsVX9GVxdsLxPcYwU"
		const uintfV4s1JN = BigInt("175")
		const WheatFarmHC7MLHJ = await WheatFarm.new(stringZF9OfOz, stringbDKtfKo, uintfV4s1JN, {from: accounts[2]});
		const uintDh53WTA = BigInt("808")
		const addressWpldrG = accounts[0]
		const uintKKKGpmq = BigInt("724")
		const addressokjfO4r = accounts[0]
		const uintvs7GpWt = BigInt("23")
		const addressmUTOEVU = accounts[1]
		const uintqJvzonL = BigInt("1530")
		const addressFAnwFJQ = accounts[3]
//		const boolYEgkJdn = await WheatFarmHC7MLHJ.increaseAllowance.call(addressWpldrG, uintDh53WTA, {from: accounts[2]});
//		const boolamZMFEm = await WheatFarmHC7MLHJ.transfer.call(addressokjfO4r, uintKKKGpmq, {from: accounts[3]});
//		const boolZfY14hO = await WheatFarmHC7MLHJ.approve.call(addressmUTOEVU, uintvs7GpWt, {from: accounts[3]});
//		const boolD8mVHDB = await WheatFarmHC7MLHJ.transfer.call(addressFAnwFJQ, uintqJvzonL, {from: accounts[1]});
//		const stringJWDxt70 = await WheatFarmHC7MLHJ.symbol.call({from: accounts[2]});

		await expect(WheatFarmHC7MLHJ.increaseAllowance.call(addressWpldrG, uintDh53WTA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringQNlp5tM = "f8fgaC8h5q4BsGOdhOQAEE"
		const stringJ3KUXCL = "Hj8gLuBmFNjbyhkt4xU"
		const uintC7wwMv = BigInt("152")
		const WheatFarmHQHWY0G = await WheatFarm.new(stringQNlp5tM, stringJ3KUXCL, uintC7wwMv, {from: accounts[2]});
		const uintHg9vxRk = BigInt("382")
		const addressHNSrBN4 = accounts[2]
		const uintsTMbnJJ = BigInt("187")
		const addressm2zPLE = accounts[3]
		const uintuvO0s4 = BigInt("1958")
		const addressHwnKehr = accounts[1]
//		const boolzYPH6QA = await WheatFarmHQHWY0G.transfer.call(addressHNSrBN4, uintHg9vxRk, {from: "0x0000000000000000000000000000000000000001"});
//		const boolbGLMoQ = await WheatFarmHQHWY0G.approveAndCall.call(addressm2zPLE, uintsTMbnJJ, {from: accounts[4]});
//		const boolo6eqq5 = await WheatFarmHQHWY0G.transfer.call(addressHwnKehr, uintuvO0s4, {from: accounts[1]});

		await expect(WheatFarmHQHWY0G.transfer.call(addressHNSrBN4, uintHg9vxRk, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringQNlp5tM = "f8fgaC8h5q4BsGOdhOQAEE"
		const stringJ3KUXCL = "Hj8gLuBmFNjbyhkt4xU"
		const uintaurTH0C = BigInt("152")
		const WheatFarmHQHWY0G = await WheatFarm.new(stringQNlp5tM, stringJ3KUXCL, uintaurTH0C, {from: accounts[2]});
		const uintYkJYeiz = BigInt("187")
		const addressKjPymdx = accounts[3]
		const uintceHYiZM = BigInt("1713")
		const addressxqMjlgZ = accounts[0]
		const uintFHUE2i1 = BigInt("1958")
		const addressZlN4wE5 = accounts[1]
//		const boolbGLMoQ = await WheatFarmHQHWY0G.approveAndCall.call(addressKjPymdx, uintYkJYeiz, {from: accounts[4]});
//		const boolnyTTLQF = await WheatFarmHQHWY0G.approve.call(addressxqMjlgZ, uintceHYiZM, {from: accounts[2]});
//		const boolo6eqq5 = await WheatFarmHQHWY0G.transfer.call(addressZlN4wE5, uintFHUE2i1, {from: accounts[1]});

		await expect(WheatFarmHQHWY0G.approveAndCall.call(addressKjPymdx, uintYkJYeiz, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringkNqDiB1 = "t1qV6KephkJWpls97FKSkMTegEHwAwL5KnM17jVOchegPg"
		const stringOLQVcyc = "4XpT7wAyhSoR2hXXPdgeFvu6hccGVA2OVR6PjYcyiLT7OW9wHwCgfLQ6pqJszMoxC84y3h92OFwbf9cp11e1fpfg2M"
		const uintQmNCht3 = BigInt("241")
		const WheatFarmOOP3Bg6 = await WheatFarm.new(stringkNqDiB1, stringOLQVcyc, uintQmNCht3, {from: accounts[3]});
		const uintTgdjLdf = BigInt("1917")
		const addressfcpqSaH = "0x0000000000000000000000000000000000000001"
		const uintrth10wW = BigInt("1691")
		const addressy8JC4td = accounts[4]
		const uintHauXu3n = BigInt("1259")
		const addresskdbNFTe = accounts[2]
		const boolmOn0JEV = await WheatFarmOOP3Bg6.approveAndCall.call(addressfcpqSaH, uintTgdjLdf, {from: accounts[3]});
		const boolB8iORg = await WheatFarmOOP3Bg6.approve.call(addressy8JC4td, uintrth10wW, {from: accounts[4]});
//		const booloBfDeOj = await WheatFarmOOP3Bg6.transfer.call(addresskdbNFTe, uintHauXu3n, {from: accounts[1]});

		assert.equal(boolB8iORg, true)
		assert.equal(boolmOn0JEV, true)
		await expect(WheatFarmOOP3Bg6.transfer.call(addresskdbNFTe, uintHauXu3n, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})