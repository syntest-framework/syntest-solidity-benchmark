const WOLF = artifacts.require("WOLF");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WOLF', (accounts) => {
	it('test for WOLF', async () => {
		const stringY1xqNrd = "tEs1OiGJIHAltybnYYuUdPNrxVc8eCzttuOuN0lxKkq"
		const stringpC5sPV = "Yzy21JRBzxTuGbGA50YXdoQMYoE1YdGaCW"
		const uintyXbWFgp = BigInt("1836")
		const WOLFYLpZnnq = await WOLF.new(stringY1xqNrd, stringpC5sPV, uintyXbWFgp, {from: accounts[0]});
		const uintyKvre3S = BigInt("464")
		const addresshngyUlK = accounts[5]
		const uintL3SjWC4 = BigInt("1559")
		const addressu4sPyoa = accounts[1]
		const uintcpLYInr = BigInt("1460")
		const addressjyVyq3t = accounts[2]
//		const boolbozNuR3 = await WOLFYLpZnnq.approveAndCall.call(addresshngyUlK, uintyKvre3S, {from: "0x0000000000000000000000000000000000000001"});
//		const boolY35MikK = await WOLFYLpZnnq.approve.call(addressu4sPyoa, uintL3SjWC4, {from: accounts[4]});
//		const boolxLzRFHq = await WOLFYLpZnnq.approve.call(addressjyVyq3t, uintcpLYInr, {from: accounts[0]});

		await expect(WOLFYLpZnnq.approveAndCall.call(addresshngyUlK, uintyKvre3S, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringjIJcldZ = "aRsoAKNkiW737455XoczomrXb9TFk9VyJIXmNsydN5jjjglh9jBBLG9CQv0yj5tm2bLwIUwYqR9S8"
		const stringawRPkgS = "ES9FTdvmJpQdTS1Qnj0b65megrTLdBiLmllICh9loR3"
		const uintEwLj5Xe = BigInt("156")
		const WOLFDvqoBZb = await WOLF.new(stringjIJcldZ, stringawRPkgS, uintEwLj5Xe, {from: accounts[4]});
		const uintkNrhReo = BigInt("1349")
		const addressBPwSfuE = accounts[1]
		const uintKIxxGun = BigInt("917")
		const addresseyT2ITM = accounts[4]
		const uintf3iR83a = BigInt("55")
		const addressQwr2a3V = accounts[3]
		const addressrXsPmTl = accounts[2]
		const uint71PjOM = BigInt("1780")
		const addressYoDUNUU = accounts[0]
		const addresswnk4l9q = accounts[2]
		const boolsw09sPk = await WOLFDvqoBZb.approve.call(addressBPwSfuE, uintkNrhReo, {from: accounts[4]});
//		const boolNXLr4xy = await WOLFDvqoBZb.transfer.call(addresseyT2ITM, uintKIxxGun, {from: accounts[2]});
//		const boolygHGZ2b = await WOLFDvqoBZb.transferFrom.call(addressrXsPmTl, addressQwr2a3V, uintf3iR83a, {from: accounts[2]});
//		const boolEpvVpoN = await WOLFDvqoBZb.transferFrom.call(addresswnk4l9q, addressYoDUNUU, uint71PjOM, {from: accounts[4]});

		assert.equal(boolsw09sPk, true)
		await expect(WOLFDvqoBZb.transfer.call(addresseyT2ITM, uintKIxxGun, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringCO8hBh5 = "tStnGaBN2pBTPjNeQJufOdpVPHYIouv3FewiLxBdyOOFfhPx1OLF1uVqLtoARJ"
		const stringdjSPbmL = "Y1ricdXeY84QsSQ3Wa1Q7Kllm4Lc2bvxCM7RILEqndeUjklVJYJKBmGgmqKUykNtfTIzns6T"
		const uintIhI95mX = BigInt("1875")
		const WOLFru2tKDd = await WOLF.new(stringCO8hBh5, stringdjSPbmL, uintIhI95mX, {from: accounts[3]});
		const uintC0mPNcY = BigInt("154")
		const addressJ76CmdU = accounts[2]
		const uintZDvhodq = BigInt("108")
		const addressRa1myHV = accounts[4]
		const addresskf8vqFw = accounts[1]
		const uintLHfbH0o = BigInt("1101")
		const addressZ0xurPL = accounts[2]
		const uintT2RUYMf = BigInt("1981")
		const addressfZ1HG2w = accounts[3]
		const booljFXSc7 = await WOLFru2tKDd.approve.call(addressJ76CmdU, uintC0mPNcY, {from: accounts[2]});
//		const boolTJcIfjA = await WOLFru2tKDd.transferFrom.call(addresskf8vqFw, addressRa1myHV, uintZDvhodq, {from: accounts[1]});
//		const booldCpbMYo = await WOLFru2tKDd.transfer.call(addressZ0xurPL, uintLHfbH0o, {from: accounts[0]});
//		const booleEn9YXg = await WOLFru2tKDd.approve.call(addressfZ1HG2w, uintT2RUYMf, {from: accounts[3]});

		assert.equal(booljFXSc7, true)
		await expect(WOLFru2tKDd.transferFrom.call(addresskf8vqFw, addressRa1myHV, uintZDvhodq, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringn4fwGKm = "wNchjpht7o4WgArgjJFgScjWxMV8AM0bfvG4d3VdNk32pReGT2any2L4nzU5TL9cCu"
		const stringRFXvyjp = "TG9556dXmwzNYr86IYp3sWhV44ybUekVgiBNhf5W6k316o9F71OzYDy9bu5JMkBAd"
		const uinta7hc3nD = BigInt("597")
		const WOLFYtDzjPS = await WOLF.new(stringn4fwGKm, stringRFXvyjp, uinta7hc3nD, {from: accounts[3]});
		const uint9wBwN4 = BigInt("177")
		const addressvibblJI = accounts[3]
		const addressL5TMjS = accounts[0]
		const uintYzYk9AE = BigInt("1973")
		const addressrqcfSbr = accounts[3]
		const addressIVztMaP = accounts[5]
//		const boolsKd32O = await WOLFYtDzjPS.transferFrom.call(addressL5TMjS, addressvibblJI, uint9wBwN4, {from: accounts[3]});
//		const boolo9kUvKC = await WOLFYtDzjPS.approve.call(addressrqcfSbr, uintYzYk9AE, {from: accounts[3]});
//		const boolJbKeYmY = await WOLFYtDzjPS.transferownership.call(addressIVztMaP, {from: accounts[3]});

		await expect(WOLFYtDzjPS.transferFrom.call(addressL5TMjS, addressvibblJI, uint9wBwN4, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringxdIvmIc = "hBufSgtxNJEcQMStE9j44dDxfOBGA7JwlCmB3GwIOojx"
		const stringXhW3Qdl = "DpUXN1RbOH7xWa3uzgjTs"
		const uintyAQA1eU = BigInt("1216")
		const WOLFXUpsLLN = await WOLF.new(stringxdIvmIc, stringXhW3Qdl, uintyAQA1eU, {from: accounts[0]});
		const uintE0KgRJW = BigInt("830")
		const addressXZ9hOxU = "0x0000000000000000000000000000000000000001"
		const uintQ4C7NT8 = BigInt("1177")
		const addressDKdTZSG = "0x0000000000000000000000000000000000000001"
		const uintx57Sdgx = BigInt("710")
		const addresstDmx4j = accounts[2]
		const uintf0IOWRb = BigInt("677")
		const addressgyCFwBS = "0x0000000000000000000000000000000000000001"
		const addressHpTr543 = "0x0000000000000000000000000000000000000001"
		const uintAfQXtys = BigInt("172")
		const addressjzc1s5G = accounts[2]
		const addresslw5OMGw = accounts[0]
		const boolwU9afDX = await WOLFXUpsLLN.approve.call(addressXZ9hOxU, uintE0KgRJW, {from: accounts[1]});
		const boolhVnXXNF = await WOLFXUpsLLN.approve.call(addressDKdTZSG, uintQ4C7NT8, {from: accounts[0]});
		const boolczh0Gp = await WOLFXUpsLLN.approveAndCall.call(addresstDmx4j, uintx57Sdgx, {from: accounts[0]});
//		const boolUxmPaF = await WOLFXUpsLLN.transferFrom.call(addressHpTr543, addressgyCFwBS, uintf0IOWRb, {from: accounts[5]});
//		const boolkYkrdbi = await WOLFXUpsLLN.transferFrom.call(addresslw5OMGw, addressjzc1s5G, uintAfQXtys, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolczh0Gp, true)
		assert.equal(boolhVnXXNF, true)
		assert.equal(boolwU9afDX, true)
		await expect(WOLFXUpsLLN.transferFrom.call(addressHpTr543, addressgyCFwBS, uintf0IOWRb, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringqS6J5m5 = "wQ9QyRDx9iBh0jElwV9ULCbDarWFnNq"
		const stringMqXqDKI = "NmY4qYIvQ9NYeUIIdL73Znf"
		const uinthY1NyNS = BigInt("1608")
		const WOLFIaR7HDu = await WOLF.new(stringqS6J5m5, stringMqXqDKI, uinthY1NyNS, {from: accounts[3]});
		const uintxjqgzU = BigInt("408")
		const addressBiQWrq = accounts[3]
		const addresslpq2wVV = accounts[1]
		const uintymzwo5a = BigInt("1507")
		const addressFjRMdeO = accounts[2]
		const uintPENWsdb = BigInt("94")
		const addressglhPAA0 = accounts[5]
		const boolyZNeDu4 = await WOLFIaR7HDu.approve.call(addressBiQWrq, uintxjqgzU, {from: accounts[0]});
//		const boolc64tMtX = await WOLFIaR7HDu.transferownership.call(addresslpq2wVV, {from: "0x0000000000000000000000000000000000000001"});
//		const boolJasogNv = await WOLFIaR7HDu.approveAndCall.call(addressFjRMdeO, uintymzwo5a, {from: accounts[1]});
//		const boolPzy6CDV = await WOLFIaR7HDu.approve.call(addressglhPAA0, uintPENWsdb, {from: accounts[4]});

		assert.equal(boolyZNeDu4, true)
		await expect(WOLFIaR7HDu.transferownership.call(addresslpq2wVV, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringc3suaFd = "hjVP8eojLyvEwdMCIbTcoS7wPoqpEKwtqJluiHcvkHceD"
		const stringnWTkCZ = "AsUH6bslTHAuMqPIivNj8Ap5ClTsWHep0QMw9gpK1PVQVhHrD8iAzrmAPVohLemX7mKWm1efDpCIEG"
		const uintwTf0Biv = BigInt("1708")
		const WOLFAidbR0 = await WOLF.new(stringc3suaFd, stringnWTkCZ, uintwTf0Biv, {from: accounts[0]});
		const addressW62hFMm = accounts[1]
		const uintoHRQ3Fd = BigInt("579")
		const addressBEWcdFq = accounts[4]
		const uintVHI1mQ = BigInt("1821")
		const addressalQ85ss = accounts[3]
		const uintW6sdRtY = BigInt("489")
		const addressEiEMbHg = accounts[1]
		const uintML5xmZj = BigInt("209")
		const addressmGqlkSD = accounts[3]
		const uintaQz8pUM = BigInt("854")
		const addressYmWQnvP = "0x0000000000000000000000000000000000000001"
		const addressS2N7MMP = accounts[5]
		const addressH82gxHX = accounts[3]
		const uintqAOoaxV = BigInt("555")
		const addresssaqytQ = accounts[4]
		const uintYcujqbL = BigInt("233")
		const addressDmzG3E = "0x0000000000000000000000000000000000000001"
		const uintckfJeS9 = BigInt("1572")
		const addressFnZed3W = accounts[2]
		const addressEIpItfx = accounts[3]
		const uinto43vU4A = BigInt("1334")
		const addressihBNWl = accounts[1]
		const uint1kenOD = BigInt("1466")
		const addressCKZ7MiI = accounts[2]
		const addressC7rPhl2 = accounts[0]
		const uinteGhNaYV = BigInt("1876")
		const address1xliXq = accounts[2]
		const boolwtmKuAJ = await WOLFAidbR0.transferownership.call(addressW62hFMm, {from: accounts[0]});
//		const boolepiRHc8 = await WOLFAidbR0.approveAndCall.call(addressBEWcdFq, uintoHRQ3Fd, {from: accounts[4]});
//		const boolFobLYYd = await WOLFAidbR0.transfer.call(addressalQ85ss, uintVHI1mQ, {from: accounts[1]});
//		const boolVDXuWer = await WOLFAidbR0.approveAndCall.call(addressEiEMbHg, uintW6sdRtY, {from: accounts[5]});
//		const booleX2vSkM = await WOLFAidbR0.approveAndCall.call(addressmGqlkSD, uintML5xmZj, {from: accounts[0]});
//		const bool9NZQyE = await WOLFAidbR0.approve.call(addressYmWQnvP, uintaQz8pUM, {from: accounts[3]});
//		const boold58Scjo = await WOLFAidbR0.transferownership.call(addressS2N7MMP, {from: accounts[2]});
//		const boolkDeyLZF = await WOLFAidbR0.transferownership.call(addressH82gxHX, {from: accounts[1]});
//		const boolgl8GisK = await WOLFAidbR0.approveAndCall.call(addresssaqytQ, uintqAOoaxV, {from: accounts[4]});
//		const booly8aG3t = await WOLFAidbR0.transfer.call(addressDmzG3E, uintYcujqbL, {from: accounts[4]});
//		const boolwBjotPR = await WOLFAidbR0.transferFrom.call(addressEIpItfx, addressFnZed3W, uintckfJeS9, {from: accounts[3]});
//		const boolNkUepIw = await WOLFAidbR0.approveAndCall.call(addressihBNWl, uinto43vU4A, {from: accounts[0]});
//		const boolaChPdCA = await WOLFAidbR0.transferFrom.call(addressC7rPhl2, addressCKZ7MiI, uint1kenOD, {from: accounts[3]});
//		const boolbkzOKOW = await WOLFAidbR0.approveAndCall.call(address1xliXq, uinteGhNaYV, {from: accounts[1]});

		assert.equal(boolwtmKuAJ, true)
		await expect(WOLFAidbR0.approveAndCall.call(addressBEWcdFq, uintoHRQ3Fd, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringc3suaFd = "hjVP8eojLyvEwdMCIbTcoS7wPoqpEKwtqJluiHcvkHceD"
		const stringnWTkCZ = "AsUH6bslTHAuMqPIivNj8Ap5ClTsWHep0QMw9gpK1PVQVhHrD8iAzrmAPVohLemX7mKWm1efDpCIEG"
		const uintZzXnQm = BigInt("1708")
		const WOLFAidbR0 = await WOLF.new(stringc3suaFd, stringnWTkCZ, uintZzXnQm, {from: accounts[0]});
		const uintNlPrWLO = BigInt("0")
		const addressuWUPpHm = accounts[2]
		const uintN05Muhz = BigInt("1312")
		const addressKwlrFAi = accounts[5]
		const addressWBjlR7i = accounts[3]
		const uintFZTa7m0 = BigInt("655")
		const addressBPPkcS = accounts[7]
		const addressxV5skfY = accounts[6]
		const boolxtq1O10 = await WOLFAidbR0.transfer.call(addressuWUPpHm, uintNlPrWLO, {from: accounts[4]});
//		const boolXGUqKhb = await WOLFAidbR0.transferFrom.call(addressWBjlR7i, addressKwlrFAi, uintN05Muhz, {from: accounts[0]});
//		const boolCEGX7ox = await WOLFAidbR0.transferFrom.call(addressxV5skfY, addressBPPkcS, uintFZTa7m0, {from: accounts[3]});

		assert.equal(boolxtq1O10, true)
		await expect(WOLFAidbR0.transferFrom.call(addressWBjlR7i, addressKwlrFAi, uintN05Muhz, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WOLF', async () => {
		const stringQjtvNiq = "wuglGYhjfjcpp3ExaytDLYTiiEsDuvJvKUOceaXd0peKAHlJQxvYma3A9weUWL2XfBkV68IGzv1y8EuaWau"
		const stringtFoYOF = "cLGNpHRfx1"
		const uintT1TgTB = BigInt("1618")
		const WOLFJ81wx7O = await WOLF.new(stringQjtvNiq, stringtFoYOF, uintT1TgTB, {from: "0x0000000000000000000000000000000000000001"});
		const addressS6jKhR1 = accounts[4]
		const uintsimjwKS = BigInt("1556")
		const addressEQYN1Wz = accounts[5]
		const uintdlNC4Zk = BigInt("1941")
		const addressvw2GG3m = accounts[3]
		const addressjW6ctPs = accounts[4]
		const boolHDZoFYL = await WOLFJ81wx7O.transferownership.call(addressS6jKhR1, {from: "0x0000000000000000000000000000000000000001"});
		const boolUb7yduF = await WOLFJ81wx7O.approveAndCall.call(addressEQYN1Wz, uintsimjwKS, {from: accounts[5]});
		const boolrK2KUuH = await WOLFJ81wx7O.transferFrom.call(addressjW6ctPs, addressvw2GG3m, uintdlNC4Zk, {from: accounts[2]});
	});

	it('test for WOLF', async () => {
		const stringc3suaFd = "hjVP8eojLyvEwdMCIbTcoS7wPoqpEKwtqJluiHcvkHceD"
		const stringnWTkCZ = "AsUH6bslTHAuMqPIivNj8Ap5ClTsWHep0QMw9gpK1PVQVhHrD8iAzrmAPVohLemX7mKWm1efDpCIEG"
		const uintsF1NEQp = BigInt("1708")
		const WOLFAidbR0 = await WOLF.new(stringc3suaFd, stringnWTkCZ, uintsF1NEQp, {from: accounts[0]});
		const uintrnD4pn = BigInt("0")
		const addressq7Mmyzp = accounts[2]
		const uintXqoEZiG = BigInt("853")
		const addressrAbyCES = accounts[2]
		const uintVjlv0B = BigInt("656")
		const addresspcN8Yxl = accounts[4]
		const addressZyJErXs = accounts[5]
		const boolLLABfx = await WOLFAidbR0.approveAndCall.call(addressq7Mmyzp, uintrnD4pn, {from: accounts[0]});
		const boolijU0Fk = await WOLFAidbR0.approve.call(addressrAbyCES, uintXqoEZiG, {from: accounts[4]});
//		const boolCEGX7ox = await WOLFAidbR0.transferFrom.call(addressZyJErXs, addresspcN8Yxl, uintVjlv0B, {from: accounts[3]});

		assert.equal(boolLLABfx, true)
		assert.equal(boolijU0Fk, true)
		await expect(WOLFAidbR0.transferFrom.call(addressZyJErXs, addresspcN8Yxl, uintVjlv0B, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})