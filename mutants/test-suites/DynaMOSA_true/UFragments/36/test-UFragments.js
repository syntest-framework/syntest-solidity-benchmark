const UFragments = artifacts.require("UFragments");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('UFragments', (accounts) => {
	it('test for UFragments', async () => {
		const UFragmentsbBFktlv = await UFragments.new({from: accounts[1]});
//		await UFragmentsbBFktlv.renounceOwnership.call({from: accounts[1]});
//		const addressMi7rUh4 = await UFragmentsbBFktlv.owner.call({from: accounts[5]});
//		const uint256fdzqGo3 = await UFragmentsbBFktlv.calRebase.call({from: accounts[1]});

		await expect(UFragmentsbBFktlv.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsahwppSf = await UFragments.new({from: accounts[3]});
		const intNB87tyc = BigInt("1058")
		const intZHy32rx = BigInt("852")
		const intTTmfbjf = BigInt("323")
		const intpL1TsUl = BigInt("-391")
		const addressIFY0tJr = accounts[2]
		const addressIGeIYAJ = accounts[1]
		const addressFftywMO = accounts[1]
		const uint8uW81FIM = await UFragmentsahwppSf.decimals.call({from: accounts[5]});
//		const int256mchmmOU = await UFragmentsahwppSf.add.call(intZHy32rx, intNB87tyc, {from: accounts[0]});
//		const int256EEHXjh = await UFragmentsahwppSf.sub.call(intpL1TsUl, intTTmfbjf, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256tya8d4 = await UFragmentsahwppSf.allowance.call(addressIGeIYAJ, addressIFY0tJr, {from: accounts[1]});
//		const uint256BWsW5e = await UFragmentsahwppSf.totalSupply.call({from: accounts[5]});
//		const uint256IP0oTqL = await UFragmentsahwppSf.balanceOf.call(addressFftywMO, {from: accounts[3]});

		assert.equal(uint8uW81FIM, BigInt("0"))
		await expect(UFragmentsahwppSf.add.call(intZHy32rx, intNB87tyc, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsOJf8PcT = await UFragments.new({from: "0x0000000000000000000000000000000000000001"});
		const intuDskEwe = BigInt("-811")
		const intEWvdrQg = BigInt("-105")
		const intSm7fkjF = BigInt("542")
		const int2avR1d = BigInt("524")
		const uintFKQken = BigInt("776")
		const addressu45IaxS = "0x0000000000000000000000000000000000000001"
		const addressa5hBu0G = accounts[0]
		const uint256kuRxFGB = await UFragmentsOJf8PcT.calRebase.call({from: accounts[2]});
		const int256xfB9G2q = await UFragmentsOJf8PcT.mul.call(intEWvdrQg, intuDskEwe, {from: "0x0000000000000000000000000000000000000001"});
		const stringcXyRGy = await UFragmentsOJf8PcT.symbol.call({from: accounts[2]});
		const int256BOPpHX7 = await UFragmentsOJf8PcT.div.call(int2avR1d, intSm7fkjF, {from: accounts[4]});
		const boolPey6M7P = await UFragmentsOJf8PcT.transferFrom.call(addressa5hBu0G, addressu45IaxS, uintFKQken, {from: accounts[2]});
	});

	it('test for UFragments', async () => {
		const UFragmentsYmOY2yx = await UFragments.new({from: accounts[1]});
		const stringuGJiEQg = await UFragmentsYmOY2yx.symbol.call({from: accounts[0]});
		const stringK9xQBOD = await UFragmentsYmOY2yx.symbol.call({from: accounts[5]});

		assert.equal(stringK9xQBOD, "")
		assert.equal(stringuGJiEQg, "")
	});

	it('test for UFragments', async () => {
		const UFragmentsaoNSu0G = await UFragments.new({from: accounts[4]});
		const uintLsBzPSr = BigInt("1919")
		const addressULy1RWl = accounts[1]
		const addressUApa7s5 = accounts[3]
		const uintLRRoiDq = BigInt("362")
		const addresso4eLuv = accounts[0]
		const addressblO1yof = accounts[2]
		const intDjKKjDR = BigInt("1214")
//		const boolkv1N1Ls = await UFragmentsaoNSu0G.transferFrom.call(addressUApa7s5, addressULy1RWl, uintLsBzPSr, {from: accounts[3]});
//		const boolF9PbPHr = await UFragmentsaoNSu0G.transferFrom.call(addressblO1yof, addresso4eLuv, uintLRRoiDq, {from: accounts[1]});
//		const int256xsBEBRE = await UFragmentsaoNSu0G.abs.call(intDjKKjDR, {from: accounts[3]});

		await expect(UFragmentsaoNSu0G.transferFrom.call(addressUApa7s5, addressULy1RWl, uintLsBzPSr, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsYmOY2yx = await UFragments.new({from: accounts[1]});
		const stringuGJiEQg = await UFragmentsYmOY2yx.symbol.call({from: accounts[0]});
		const addressBkAp7s7 = await UFragmentsYmOY2yx.owner.call({from: "0x0000000000000000000000000000000000000001"});
		const stringK9xQBOD = await UFragmentsYmOY2yx.symbol.call({from: accounts[5]});

		assert.equal(addressBkAp7s7, 0x0000000000000000000000000000000000000000)
		assert.equal(stringK9xQBOD, "")
		assert.equal(stringuGJiEQg, "")
	});

	it('test for UFragments', async () => {
		const UFragmentsaoNSu0G = await UFragments.new({from: accounts[4]});
		const uintWjyrNGq = BigInt("1919")
		const addressuZ3Zbo9 = accounts[2]
		const addressWAn1OLc = accounts[3]
		const stringVdNWkq = await UFragmentsaoNSu0G.name.call({from: accounts[2]});
//		const boolkv1N1Ls = await UFragmentsaoNSu0G.transferFrom.call(addressWAn1OLc, addressuZ3Zbo9, uintWjyrNGq, {from: accounts[3]});

		assert.equal(stringVdNWkq, "")
		await expect(UFragmentsaoNSu0G.transferFrom.call(addressWAn1OLc, addressuZ3Zbo9, uintWjyrNGq, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsaoNSu0G = await UFragments.new({from: accounts[4]});
		const addresskVh5zU = accounts[0]
		const addressvAgza0B = accounts[2]
		const uintW7VanXP = BigInt("1902")
		const addressCaYOIVs = accounts[2]
		const addresseEHUKVe = accounts[3]
//		const addresslxC9ezg = await UFragmentsaoNSu0G.initialize.call(addresskVh5zU, {from: accounts[0]});
//		const addressscnQAUv = await UFragmentsaoNSu0G.initialize.call(addressvAgza0B, {from: accounts[5]});
//		const boolkv1N1Ls = await UFragmentsaoNSu0G.transferFrom.call(addresseEHUKVe, addressCaYOIVs, uintW7VanXP, {from: accounts[3]});

		await expect(UFragmentsaoNSu0G.initialize.call(addresskVh5zU, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsaoNSu0G = await UFragments.new({from: accounts[4]});
		const addressv2clqk = accounts[4]
		const address15id5O = accounts[3]
		const uintLuAkyuU = BigInt("362")
		const addressmmWfYUJ = accounts[0]
		const addressWYiMdY = accounts[2]
		const intVlhnHcq = BigInt("1336")
		const intQA1E9NA = BigInt("389")
		const addressvn6G41H = "0x0000000000000000000000000000000000000001"
		const intJfJWsq = BigInt("728")
		const uint256ZyitYDm = await UFragmentsaoNSu0G.allowance.call(address15id5O, addressv2clqk, {from: accounts[2]});
//		await UFragmentsaoNSu0G.onlyOwner.call({from: accounts[2]});
//		const boolF9PbPHr = await UFragmentsaoNSu0G.transferFrom.call(addressWYiMdY, addressmmWfYUJ, uintLuAkyuU, {from: accounts[1]});
//		const int256V0szA8f = await UFragmentsaoNSu0G.mul.call(intQA1E9NA, intVlhnHcq, {from: accounts[2]});
//		const addressVxisTjy = await UFragmentsaoNSu0G.initialize.call(addressvn6G41H, {from: accounts[4]});
//		const int256xsBEBRE = await UFragmentsaoNSu0G.abs.call(intJfJWsq, {from: accounts[3]});

		assert.equal(uint256ZyitYDm, BigInt("0"))
		await expect(UFragmentsaoNSu0G.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsaoNSu0G = await UFragments.new({from: accounts[4]});
		const uintPGQ66Jh = BigInt("163")
		const stringdHHM860 = "VAXYk82Xx9VLKJdUXiMzbUzOYlRAR0ZVSLSHd2Sl2fTdwiLMjlLM4F1rEVGJSSwl81lLoivULwZfW2"
		const stringXRTacw = "cje7L9wGzD23sKRAnv6WMHAibrdqKxEmLpWpT4CeThMgThkDQg"
		const uintgk86qe7 = BigInt("1919")
		const addressscJHXb3 = accounts[1]
		const addressnIG2Pn = accounts[3]
		const addressd1NrGel = accounts[4]
		const addressxfiTMkg = accounts[3]
		const uintqtxQgHp = BigInt("362")
		const addresspn8U1wU = accounts[0]
		const addressPEfA6tk = accounts[2]
		const intnQgS8Qn = BigInt("1336")
		const intGeM3Ja = BigInt("389")
		const addressiJvSmao = "0x0000000000000000000000000000000000000001"
		const intU4eNHew = BigInt("728")
		const stringt4Xj2Ce = await UFragmentsaoNSu0G.initialize.call(stringXRTacw, stringdHHM860, uintPGQ66Jh, {from: accounts[4]});
//		const boolkv1N1Ls = await UFragmentsaoNSu0G.transferFrom.call(addressnIG2Pn, addressscJHXb3, uintgk86qe7, {from: accounts[3]});
//		const uint256ZyitYDm = await UFragmentsaoNSu0G.allowance.call(addressxfiTMkg, addressd1NrGel, {from: accounts[2]});
//		await UFragmentsaoNSu0G.onlyOwner.call({from: accounts[2]});
//		const boolF9PbPHr = await UFragmentsaoNSu0G.transferFrom.call(addressPEfA6tk, addresspn8U1wU, uintqtxQgHp, {from: accounts[1]});
//		const int256V0szA8f = await UFragmentsaoNSu0G.mul.call(intGeM3Ja, intnQgS8Qn, {from: accounts[2]});
//		const addressVxisTjy = await UFragmentsaoNSu0G.initialize.call(addressiJvSmao, {from: accounts[4]});
//		const int256xsBEBRE = await UFragmentsaoNSu0G.abs.call(intU4eNHew, {from: accounts[3]});

		await expect(UFragmentsaoNSu0G.transferFrom.call(addressnIG2Pn, addressscJHXb3, uintgk86qe7, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsxddAza = await UFragments.new({from: accounts[0]});
		const addressL477woP = accounts[2]
		const uintWcDPnw6 = BigInt("435")
		const addressORRmm4F = accounts[0]
		const uintczgS4LS = BigInt("1121")
		const addressevwfloX = accounts[2]
		const addresswCGLpvM = accounts[0]
		const addressNiYoVq = accounts[0]
		const uint256NkkaPW = await UFragmentsxddAza.balanceOf.call(addressL477woP, {from: accounts[0]});
		const boolUd3c5C9 = await UFragmentsxddAza.approve.call(addressORRmm4F, uintWcDPnw6, {from: accounts[2]});
//		const addressc26ORfM = await UFragmentsxddAza.initRebase.call(addressevwfloX, uintczgS4LS, {from: accounts[3]});
//		const uint256wNyXxRP = await UFragmentsxddAza.allowance.call(addressNiYoVq, addresswCGLpvM, {from: accounts[3]});

		assert.equal(boolUd3c5C9, true)
		assert.equal(uint256NkkaPW, BigInt("0"))
		await expect(UFragmentsxddAza.initRebase.call(addressevwfloX, uintczgS4LS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsxddAza = await UFragments.new({from: accounts[0]});
		const addressJKfBKFA = accounts[2]
		const uintBYNxD3Q = BigInt("643")
		const addressy1rAfW = accounts[2]
		const uinttn2fW7u = BigInt("435")
		const addressyjo0X5X = accounts[1]
		const addressIwLn0n = accounts[1]
		const addressbh0xFs1 = accounts[0]
		const uint256NkkaPW = await UFragmentsxddAza.balanceOf.call(addressJKfBKFA, {from: accounts[0]});
//		const boolKHBi7rj = await UFragmentsxddAza.transfer.call(addressy1rAfW, uintBYNxD3Q, {from: accounts[1]});
//		const boolUd3c5C9 = await UFragmentsxddAza.approve.call(addressyjo0X5X, uinttn2fW7u, {from: accounts[2]});
//		const uint256wNyXxRP = await UFragmentsxddAza.allowance.call(addressbh0xFs1, addressIwLn0n, {from: accounts[3]});

		assert.equal(uint256NkkaPW, BigInt("0"))
		await expect(UFragmentsxddAza.transfer.call(addressy1rAfW, uintBYNxD3Q, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsaer462Z = await UFragments.new({from: accounts[3]});
		const intbZCIxGE = BigInt("551")
		const addressVnAjCcz = "0x0000000000000000000000000000000000000001"
		const addresssvk5elV = accounts[4]
		const addressRt8T2eV = accounts[3]
		const boolSOkXgJg = await UFragmentsaer462Z.rebaseTimeInfo.call({from: accounts[5]});
//		const int256PetF0XR = await UFragmentsaer462Z.abs.call(intbZCIxGE, {from: accounts[4]});
//		const uint256mywQZVd = await UFragmentsaer462Z.calRebase.call({from: accounts[1]});
//		const stringVxlqmqx = await UFragmentsaer462Z.name.call({from: accounts[4]});
//		const uint256OLMckRN = await UFragmentsaer462Z.allowance.call(addresssvk5elV, addressVnAjCcz, {from: accounts[0]});
//		const addressp6vCdUk = await UFragmentsaer462Z.initialize.call(addressRt8T2eV, {from: accounts[2]});

		await expect(UFragmentsaer462Z.abs.call(intbZCIxGE, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsxddAza = await UFragments.new({from: accounts[0]});
		const addressJhMg2np = accounts[2]
		const uint256NkkaPW = await UFragmentsxddAza.balanceOf.call(addressJhMg2np, {from: accounts[0]});
		const uint256ieRbH1t = await UFragmentsxddAza.totalSupply.call({from: accounts[4]});

		assert.equal(uint256NkkaPW, BigInt("0"))
		assert.equal(uint256ieRbH1t, BigInt("0"))
	});

	it('test for UFragments', async () => {
		const UFragmentsxddAza = await UFragments.new({from: accounts[0]});
		const addressSvxx6k6 = accounts[3]
		const uint256NkkaPW = await UFragmentsxddAza.balanceOf.call(addressSvxx6k6, {from: accounts[0]});
//		const uint256I3s8KdQ = await UFragmentsxddAza.calRebase.call({from: accounts[2]});

		assert.equal(uint256NkkaPW, BigInt("0"))
		await expect(UFragmentsxddAza.calRebase.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for UFragments', async () => {
		const UFragmentsMzOC21 = await UFragments.new({from: accounts[3]});
		const addressw6tQmif = accounts[1]
		const addressMTrWtxW = accounts[0]
		const addressGIMrpXL = "0x00000000000000000000000000000000000000-1"
		const uintDs6Vs1D = BigInt("926")
		const addressxIwlaSD = accounts[4]
		const addressZKxFLwi = accounts[3]
		const addresswCgYvAj = accounts[4]
		const uintObrd7VU = BigInt("229")
		const stringrMYi4pf = "3VhTsVEY9AgJgAgRUrOnf5O6SRjDT9TLR9dfQaaIAsBWJSibu5uarx9JiE8Vok0Rf7Gk3"
		const stringec0btyI = "uyO12nosmVHq"
		const addressmmNTbu0 = accounts[0]
		const uintip2kQn = BigInt("107")
		const stringbSldTiI = "MX1JXWCMCGjdeiieYj1g13Qfkl594Yx4ajTtryvZJXw92NlA1LFalynFwx29c3tfRAkr7Letpl"
		const stringF9SObVl = "aQvCHrlovq3pFs5ICi4bxQGrXrnvW1UbJmIwXlGWBEVbQUClrFJULW9k71kef94Fx0Lq0"
		const intrTeWdK = BigInt("1559")
		const intZiq7nQn = BigInt("-334")
		const boolvnnOiZ = await UFragmentsMzOC21.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256WNifBjY = await UFragmentsMzOC21.allowance.call(addressMTrWtxW, addressw6tQmif, {from: accounts[0]});
		const uint8VWGz6Cw = await UFragmentsMzOC21.decimals.call({from: accounts[0]});
//		const uint256nqd1Yb = await UFragmentsMzOC21.balanceOf.call(addressGIMrpXL, {from: accounts[5]});
//		const stringv5fcvH8 = await UFragmentsMzOC21.name.call({from: accounts[0]});
//		const uint256z5lj0Bt = await UFragmentsMzOC21.calRebase.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolOWzoWzn = await UFragmentsMzOC21.transfer.call(addressxIwlaSD, uintDs6Vs1D, {from: accounts[2]});
//		const uint256XE6kHJS = await UFragmentsMzOC21.allowance.call(addresswCgYvAj, addressZKxFLwi, {from: accounts[0]});
//		await UFragmentsMzOC21.onlyOwner.call({from: accounts[0]});
//		const stringJKjaN5 = await UFragmentsMzOC21.initialize.call(stringec0btyI, stringrMYi4pf, uintObrd7VU, {from: accounts[1]});
//		const addressD7X0Isv = await UFragmentsMzOC21.initialize.call(addressmmNTbu0, {from: accounts[2]});
//		const stringSiVzYCf = await UFragmentsMzOC21.initialize.call(stringF9SObVl, stringbSldTiI, uintip2kQn, {from: accounts[3]});
//		const int256iG1iZ6f = await UFragmentsMzOC21.div.call(intZiq7nQn, intrTeWdK, {from: accounts[4]});
//		const uint8wwUiiL = await UFragmentsMzOC21.decimals.call({from: accounts[1]});

		assert.equal(boolvnnOiZ, false)
		assert.equal(uint256WNifBjY, BigInt("0"))
		assert.equal(uint8VWGz6Cw, BigInt("0"))
		await expect(UFragmentsMzOC21.balanceOf.call(addressGIMrpXL, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})