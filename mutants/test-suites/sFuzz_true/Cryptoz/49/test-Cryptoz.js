const Cryptoz = artifacts.require("Cryptoz");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cryptoz', (accounts) => {
	it('test for Cryptoz', async () => {
		const Cryptozq0kFYXj = await Cryptoz.new({from: accounts[2]});
		const uintKetNSln = BigInt("1588")
//		await Cryptozq0kFYXj.getOwnedCard.call(uintKetNSln, {from: accounts[0]});
//		await Cryptozq0kFYXj.f.call({from: accounts[1]});
//		await Cryptozq0kFYXj.withdraw.call({from: accounts[2]});
//		await Cryptozq0kFYXj.withdraw.call({from: accounts[3]});
//		await Cryptozq0kFYXj.withdraw.call({from: accounts[1]});
//		await Cryptozq0kFYXj.getBonusBoosters.call({from: accounts[4]});

		await expect(Cryptozq0kFYXj.getOwnedCard.call(uintKetNSln, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozMbcI9Ea = await Cryptoz.new({from: accounts[1]});
		const uintqL9sU40 = BigInt("251")
		const uintdiNt3Vb = BigInt("1877")
		const uintFLVQAwC = BigInt("1041")
		const uintBTVx1GQ = BigInt("81")
		const uintYymazAR = BigInt("235")
		const uintgb9Aqpd = BigInt("140")
		const stringiNn7QEC = "88MgmgiRXWIiCKPQ9a3BQrVmlrd"
		const stringUojoSMp = "MShjFjU5VRrVLncImweNiV7YKy1ingpRNFYnobd8Iyfbnhu4C8SDwB4aFvagk"
		const uintuhSts7g = BigInt("169")
		const uintVw0j2a = BigInt("969")
		const boolDDp1Ecr = await CryptozMbcI9Ea.loadNewCardType.call(uintuhSts7g, stringUojoSMp, stringiNn7QEC, uintgb9Aqpd, uintYymazAR, uintBTVx1GQ, uintFLVQAwC, uintdiNt3Vb, uintqL9sU40, {from: accounts[1]});
//		const boolMorrrWV = await CryptozMbcI9Ea.buyCard.call(uintVw0j2a, {from: accounts[2]});

		assert.equal(boolDDp1Ecr, true)
		await expect(CryptozMbcI9Ea.buyCard.call(uintVw0j2a, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozS31m4Gr = await Cryptoz.new({from: accounts[3]});
		const addressSt8Acku = accounts[5]
		const uintTSWo73 = BigInt("411")
		const addressk23pV8 = accounts[0]
		const uintjrUTEa = BigInt("1106")
//		const addresspt2NNyN = await CryptozS31m4Gr.initialize.call(addressSt8Acku, {from: accounts[2]});
//		await CryptozS31m4Gr.getOwnedCard.call(uintTSWo73, {from: accounts[4]});
//		const uint256arrayhwtKBcG = await CryptozS31m4Gr.tokensOfOwner.call(addressk23pV8, {from: accounts[3]});
//		const uint256qKcnKuA = await CryptozS31m4Gr.tokenByIndex.call(uintjrUTEa, {from: accounts[0]});
//		const stringcX0sxQ = await CryptozS31m4Gr.symbol.call({from: accounts[4]});

		await expect(CryptozS31m4Gr.initialize.call(addressSt8Acku, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozxAAaZ8j = await Cryptoz.new({from: accounts[1]});
		const uintQ792rJ8 = BigInt("1953")
//		await CryptozxAAaZ8j.getTokensByRarity.call({from: "0x0000000000000000000000000000000000000001"});
//		await CryptozxAAaZ8j.getTokensByRarity.call({from: accounts[4]});
//		const uint256w9CNvG = await CryptozxAAaZ8j.totalSupply.call({from: accounts[5]});
//		const uint32jNC5sNV = await CryptozxAAaZ8j.getFreeCard.call(uintQ792rJ8, {from: accounts[1]});

		await expect(CryptozxAAaZ8j.getTokensByRarity.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozQ9qiWcu = await Cryptoz.new({from: accounts[2]});
		const uintXCVGFqT = BigInt("1052")
		const uintl0r8WXh = BigInt("1095")
		const uintUw0c38S = BigInt("1353")
		const uintYbbkBtz = BigInt("30")
		const addresstppNpf0 = accounts[2]
		const addressloXZe7U = accounts[1]
//		const boolCAbXxII = await CryptozQ9qiWcu.openBoosterCard.call(uintXCVGFqT, {from: "0x0000000000000000000000000000000000000001"});
//		const boolyiqHYaI = await CryptozQ9qiWcu.buyCard.call(uintl0r8WXh, {from: accounts[2]});
//		const boolQs3Sozo = await CryptozQ9qiWcu.buyCard.call(uintUw0c38S, {from: accounts[4]});
//		const uint256g6C2IZJ = await CryptozQ9qiWcu.tokenOfOwnerByIndex.call(addresstppNpf0, uintYbbkBtz, {from: accounts[0]});
//		const uintdLl5VEx = await CryptozQ9qiWcu.getTimeToDailyBonus.call(addressloXZe7U, {from: accounts[5]});

		await expect(CryptozQ9qiWcu.openBoosterCard.call(uintXCVGFqT, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozd4dlct1 = await Cryptoz.new({from: accounts[3]});
		const uintwyveweq = BigInt("1364")
		const uintXkWBkt = BigInt("1080")
//		await Cryptozd4dlct1.buyBoosterCardAndOpen.call({from: accounts[3]});
//		const booliYQNh27 = await Cryptozd4dlct1.buyBoosterCard.call(uintwyveweq, {from: accounts[1]});
//		const uint256UA67jks = await Cryptozd4dlct1.tokenByIndex.call(uintXkWBkt, {from: accounts[0]});
//		const uint256C7bzLKY = await Cryptozd4dlct1.totalSupply.call({from: accounts[2]});

		await expect(Cryptozd4dlct1.buyBoosterCardAndOpen.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozYZo183V = await Cryptoz.new({from: accounts[5]});
		const addressakC4kM = accounts[2]
		const uintwOWyvVo = BigInt("477")
		const uinte2LJwwn = BigInt("99")
		const uintwzq2hF = BigInt("836")
//		const addressFt6Xkjy = await CryptozYZo183V.linkMySponsor.call(addressakC4kM, {from: accounts[5]});
//		const uint32gpIA9XK = await CryptozYZo183V.getFreeCard.call(uintwOWyvVo, {from: accounts[1]});
//		const boolkxtCjET = await CryptozYZo183V.buyBoosterCard.call(uinte2LJwwn, {from: accounts[2]});
//		const uint256WAvbDYs = await CryptozYZo183V.sacrifice.call(uintwzq2hF, {from: "0x0000000000000000000000000000000000000001"});

		await expect(CryptozYZo183V.linkMySponsor.call(addressakC4kM, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozNA18aHH = await Cryptoz.new({from: accounts[1]});
		const uintDlbU8pD = BigInt("1109")
		const addressqb77OVl = accounts[0]
		const addressuSVSL0V = accounts[4]
		const addresstwuuPe0 = "0x0000000000000000000000000000000000000001"
		const uintl10UoOk = BigInt("947")
		const addressqYAtVAR = accounts[1]
		const addressXachDB = accounts[3]
		const addressfgJFUqV = accounts[2]
//		await CryptozNA18aHH.getBonusBoosters.call({from: accounts[2]});
//		const addressRtYdDl3 = await CryptozNA18aHH.transferFrom.call(addressuSVSL0V, addressqb77OVl, uintDlbU8pD, {from: accounts[3]});
//		const addresszw76pdP = await CryptozNA18aHH.linkMySponsor.call(addresstwuuPe0, {from: accounts[0]});
//		const addressOejE4yr = await CryptozNA18aHH.transferFrom.call(addressXachDB, addressqYAtVAR, uintl10UoOk, {from: accounts[3]});
//		const uint256arraykZJOp01 = await CryptozNA18aHH.tokensOfOwner.call(addressfgJFUqV, {from: accounts[0]});
//		await CryptozNA18aHH.f.call({from: accounts[3]});

		await expect(CryptozNA18aHH.getBonusBoosters.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozrXtibLX = await Cryptoz.new({from: accounts[0]});
		const uintCNgcEdD = BigInt("612")
		const addresspv2HxDZ = accounts[1]
//		const uint256XzU0uTa = await CryptozrXtibLX.sacrifice.call(uintCNgcEdD, {from: accounts[2]});
//		const addressPS5iVbX = await CryptozrXtibLX.linkMySponsor.call(addresspv2HxDZ, {from: accounts[0]});

		await expect(CryptozrXtibLX.sacrifice.call(uintCNgcEdD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozQ9qiWcu = await Cryptoz.new({from: accounts[2]});
		const uintvBwh3mh = BigInt("30")
		const addressVV6NacF = accounts[2]
		const addressTgNveM5 = accounts[1]
//		const uint256g6C2IZJ = await CryptozQ9qiWcu.tokenOfOwnerByIndex.call(addressVV6NacF, uintvBwh3mh, {from: accounts[0]});
//		const stringoGydVgR = await CryptozQ9qiWcu.symbol.call({from: accounts[0]});
//		const uintdLl5VEx = await CryptozQ9qiWcu.getTimeToDailyBonus.call(addressTgNveM5, {from: accounts[5]});
//		await CryptozQ9qiWcu.buyBoosterCardAndOpen.call({from: accounts[0]});

		await expect(CryptozQ9qiWcu.tokenOfOwnerByIndex.call(addressVV6NacF, uintvBwh3mh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozMbcI9Ea = await Cryptoz.new({from: accounts[1]});
		const addressyeKLDV0 = accounts[3]
		const uintMJPFcGd = BigInt("251")
		const uintWX2BCSg = BigInt("1725")
		const uintpdytwnQ = BigInt("1041")
		const uintkSO7BJc = BigInt("81")
		const uintEaI3zye = BigInt("235")
		const uintMBkKEhB = BigInt("145")
		const stringiNn7QEC = "88MgmgiRXWIiCKNQ9a3BQrVmlrd"
		const stringUojoSMp = "MShjFjU5VRrVLncImweNiV7YKy1ingpRNFYnobd8Iyfbnhu4C8SDwB4aFvagk"
		const uintsc7ZL7q = BigInt("169")
		const uintFn6E3vr = BigInt("304")
		const uintzJnTKah = await CryptozMbcI9Ea.getTimeToDailyBonus.call(addressyeKLDV0, {from: accounts[5]});
		const boolDDp1Ecr = await CryptozMbcI9Ea.loadNewCardType.call(uintsc7ZL7q, stringUojoSMp, stringiNn7QEC, uintMBkKEhB, uintEaI3zye, uintkSO7BJc, uintpdytwnQ, uintWX2BCSg, uintMJPFcGd, {from: accounts[1]});
//		const uint256ekjbcn = await CryptozMbcI9Ea.tokenByIndex.call(uintFn6E3vr, {from: accounts[0]});
//		await CryptozMbcI9Ea.getBonusBoosters.call({from: accounts[4]});
//		await CryptozMbcI9Ea.withdraw.call({from: accounts[3]});
//		await CryptozMbcI9Ea.buyBoosterCardAndOpen.call({from: accounts[4]});

		assert.equal(boolDDp1Ecr, true)
		assert.equal(uintzJnTKah, BigInt("1630203880"))
		await expect(CryptozMbcI9Ea.tokenByIndex.call(uintFn6E3vr, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozMbcI9Ea = await Cryptoz.new({from: accounts[1]});
		const uintM9PTnI5 = BigInt("194")
		const address3fpBKe = accounts[3]
		const uintccBBoC = BigInt("251")
		const uintPqgyuaf = BigInt("1725")
		const uintPkVh0R = BigInt("1041")
		const uintvMNM2S4 = BigInt("81")
		const uintzGPpt0H = BigInt("235")
		const uintgyQschW = BigInt("145")
		const stringiNn7QEC = "88MgmgiRXWIiCKPQ9a3BQrVmlrd"
		const stringUojoSMp = "MShjFjU5VRrVLncImweNiV7YKy1ingpRNFYnobd8Iyfbnhu4C8SDwB4aFvagk"
		const uintiuQx7De = BigInt("169")
		const stringQUKOX9j = await CryptozMbcI9Ea.name.call({from: accounts[3]});
//		const uint32hihHIyL = await CryptozMbcI9Ea.isValidCard.call(uintM9PTnI5, {from: accounts[3]});
//		const uintzJnTKah = await CryptozMbcI9Ea.getTimeToDailyBonus.call(address3fpBKe, {from: accounts[5]});
//		const boolDDp1Ecr = await CryptozMbcI9Ea.loadNewCardType.call(uintiuQx7De, stringUojoSMp, stringiNn7QEC, uintgyQschW, uintzGPpt0H, uintvMNM2S4, uintPkVh0R, uintPqgyuaf, uintccBBoC, {from: accounts[1]});
//		await CryptozMbcI9Ea.getBonusBoosters.call({from: accounts[4]});
//		await CryptozMbcI9Ea.buyBoosterCardAndOpen.call({from: accounts[4]});

		assert.equal(stringQUKOX9j, "Cryptoz Cards")
		await expect(CryptozMbcI9Ea.isValidCard.call(uintM9PTnI5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozBeaXlvi = await Cryptoz.new({from: accounts[4]});
		const uintZxPqSc7 = BigInt("1976")
//		await CryptozBeaXlvi.f.call({from: accounts[1]});
//		await CryptozBeaXlvi.getOwnedCard.call(uintZxPqSc7, {from: accounts[1]});
//		await CryptozBeaXlvi.getBonusBoosters.call({from: accounts[1]});

		await expect(CryptozBeaXlvi.f.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozMbcI9Ea = await Cryptoz.new({from: accounts[1]});
		const addressh1FJ6vw = accounts[3]
		const addressFmpHsQU = accounts[2]
		const uintseaQZHf = BigInt("251")
		const uintgOe1Z5X = BigInt("1725")
		const uintbe9VbJT = BigInt("1041")
		const uintOXiyIU = BigInt("81")
		const uintGkcY6Am = BigInt("235")
		const uinthcFHri2 = BigInt("145")
		const stringiNn7QEC = "88MgmgiRXWIiCKNQ9a3BQrVmlrd"
		const stringUojoSMp = "MShjFjU5VRrVLncImweNiV7YKy1ingpRNFYnobd8Iyfbnhu4C8SDwB4aFvagk"
		const uinto8NNUTf = BigInt("169")
		const uintEZv1Hn = BigInt("1378")
		const uintI9mdNIv = BigInt("304")
		const uintzJnTKah = await CryptozMbcI9Ea.getTimeToDailyBonus.call(addressh1FJ6vw, {from: accounts[5]});
		const uint256arrayj03vQCj = await CryptozMbcI9Ea.tokensOfOwner.call(addressFmpHsQU, {from: accounts[4]});
		const boolDDp1Ecr = await CryptozMbcI9Ea.loadNewCardType.call(uinto8NNUTf, stringUojoSMp, stringiNn7QEC, uinthcFHri2, uintGkcY6Am, uintOXiyIU, uintbe9VbJT, uintgOe1Z5X, uintseaQZHf, {from: accounts[1]});
//		const boolY5xSyf4 = await CryptozMbcI9Ea.openBoosterCard.call(uintEZv1Hn, {from: accounts[3]});
//		const uint256ekjbcn = await CryptozMbcI9Ea.tokenByIndex.call(uintI9mdNIv, {from: accounts[0]});
//		await CryptozMbcI9Ea.withdraw.call({from: accounts[3]});

		assert.equal(boolDDp1Ecr, true)
		assert.equal(uint256arrayj03vQCj, BigInt(""))
		assert.equal(uintzJnTKah, BigInt("1630203900"))
		await expect(CryptozMbcI9Ea.openBoosterCard.call(uintEZv1Hn, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozMbcI9Ea = await Cryptoz.new({from: accounts[1]});
		const addressVlQShT9 = accounts[3]
		const uintCkRCzD4 = BigInt("1348")
		const uintIkCJh2 = BigInt("251")
		const uintyp7d9mc = BigInt("1725")
		const uintAa9bdq = BigInt("1041")
		const uintvwUeRd = BigInt("81")
		const uintHLH1tEu = BigInt("235")
		const uintb383eET = BigInt("145")
		const stringiNn7QEC = "88MgmgiRXWIiCKPQ9a3qQrVmlrd"
		const stringUojoSMp = "MShjFjU5VRrVLncImweNiV7YKy1ingpRNFYnobd8Iyfbnhu4C8SDwB4aFvagk"
		const uintA6oNPE = BigInt("169")
		const uintzJnTKah = await CryptozMbcI9Ea.getTimeToDailyBonus.call(addressVlQShT9, {from: accounts[5]});
		const stringpLzsq9v = await CryptozMbcI9Ea.tokenURI.call(uintCkRCzD4, {from: accounts[0]});
		const boolDDp1Ecr = await CryptozMbcI9Ea.loadNewCardType.call(uintA6oNPE, stringUojoSMp, stringiNn7QEC, uintb383eET, uintHLH1tEu, uintvwUeRd, uintAa9bdq, uintyp7d9mc, uintIkCJh2, {from: accounts[1]});
//		await CryptozMbcI9Ea.getTokensByRarity.call({from: accounts[0]});
//		await CryptozMbcI9Ea.getBonusBoosters.call({from: accounts[4]});
//		await CryptozMbcI9Ea.buyBoosterCardAndOpen.call({from: accounts[4]});

		assert.equal(boolDDp1Ecr, true)
		assert.equal(stringpLzsq9v, "https://cryptoz.cards/data/1348")
		assert.equal(uintzJnTKah, BigInt("1630203897"))
		await expect(CryptozMbcI9Ea.getTokensByRarity.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozMbcI9Ea = await Cryptoz.new({from: accounts[1]});
		const addressYay81mj = accounts[3]
		const uintUIodasj = BigInt("251")
		const uintIphWBp6 = BigInt("1725")
		const uintuDRV0HF = BigInt("1041")
		const uintKFBq5a = BigInt("81")
		const uintW7v8FJ = BigInt("235")
		const uintgYlXpgf = BigInt("145")
		const stringiNn7QEC = "88MgmgiRXWIiCKPQ9a3BQrVmlrd"
		const stringUojoSMp = "MShjFjU5VRrVLncImweNiV7YKy1ingpRNFYnobd8Iyfbnhu4C8SDwB4aFvagk"
		const uintzJdVxJy = BigInt("169")
		const uintecCrxlC = BigInt("1428")
		const uintzJnTKah = await CryptozMbcI9Ea.getTimeToDailyBonus.call(addressYay81mj, {from: accounts[5]});
		const boolDDp1Ecr = await CryptozMbcI9Ea.loadNewCardType.call(uintzJdVxJy, stringUojoSMp, stringiNn7QEC, uintgYlXpgf, uintW7v8FJ, uintKFBq5a, uintuDRV0HF, uintIphWBp6, uintUIodasj, {from: accounts[1]});
//		const boolDGAzUPv = await CryptozMbcI9Ea.buyBoosterCard.call(uintecCrxlC, {from: accounts[0]});
//		await CryptozMbcI9Ea.getBonusBoosters.call({from: accounts[4]});
//		await CryptozMbcI9Ea.buyBoosterCardAndOpen.call({from: accounts[4]});

		assert.equal(boolDDp1Ecr, true)
		assert.equal(uintzJnTKah, BigInt("1630203893"))
		await expect(CryptozMbcI9Ea.buyBoosterCard.call(uintecCrxlC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozDrbqkKA = await Cryptoz.new({from: "0x0000000000000000000000000000000000000001"});
		const uintWzGg29R = BigInt("792")
		const uintqHSldsK = BigInt("1664")
		const uintRTn1h2R = BigInt("994")
		const address6Gq3qN = accounts[2]
		const uintJo4dJWp = BigInt("1331")
		await CryptozDrbqkKA.f.call({from: accounts[3]});
		const boolbpxoB2G = await CryptozDrbqkKA.buyBoosterCard.call(uintWzGg29R, {from: accounts[5]});
		const stringWOIUSu = await CryptozDrbqkKA.tokenURI.call(uintqHSldsK, {from: accounts[5]});
		const uint256QRGAao = await CryptozDrbqkKA.tokenOfOwnerByIndex.call(address6Gq3qN, uintRTn1h2R, {from: accounts[3]});
		const boolgkyS0Qv = await CryptozDrbqkKA.openBoosterCard.call(uintJo4dJWp, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Cryptoz', async () => {
		const CryptozMbcI9Ea = await Cryptoz.new({from: accounts[1]});
		const uintQFtkkmA = BigInt("0")
		const uintt7jqhzA = BigInt("611")
		const uintIEMkeCa = BigInt("166")
//		const boolUCGchol = await CryptozMbcI9Ea.buyCard.call(uintQFtkkmA, {from: accounts[3]});
//		const uint256ekjbcn = await CryptozMbcI9Ea.tokenByIndex.call(uintt7jqhzA, {from: accounts[0]});
//		await CryptozMbcI9Ea.getOwnedCard.call(uintIEMkeCa, {from: "0x0000000000000000000000000000000000000001"});

		await expect(CryptozMbcI9Ea.buyCard.call(uintQFtkkmA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozQ9qiWcu = await Cryptoz.new({from: accounts[2]});
		const addresse9AUcny = accounts[2]
		const uintXQUonb3 = BigInt("1379")
		const uintPEnpIYD = BigInt("629")
		const addressiFbJp9q = await CryptozQ9qiWcu.initialize.call(addresse9AUcny, {from: accounts[2]});
//		const uint256CwmrLJD = await CryptozQ9qiWcu.tokenByIndex.call(uintXQUonb3, {from: accounts[4]});
//		const boolCAbXxII = await CryptozQ9qiWcu.openBoosterCard.call(uintPEnpIYD, {from: "0x0000000000000000000000000000000000000001"});

		await expect(CryptozQ9qiWcu.tokenByIndex.call(uintXQUonb3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozMbcI9Ea = await Cryptoz.new({from: accounts[1]});
		const addresshSxF29V = accounts[3]
		const uintvAU8INJ = BigInt("251")
		const uintMmBLIWA = BigInt("1725")
		const uintLesBIyk = BigInt("1041")
		const uintMpbBtCI = BigInt("81")
		const uintNrvl0kH = BigInt("235")
		const uint24GPWh = BigInt("145")
		const stringiNn7QEC = "88MgmgiRXWIiCKPQ9a3BQrVmlrd"
		const stringUojoSMp = "MShjFjU5VRrVLncImweNiV7YKy1ingpRNFYnobd8Iyfbnhu4C8SDwB4aFvagk"
		const uintIbLQE7 = BigInt("169")
		const addressZc4um6A = accounts[0]
		const uintAKxLFzP = BigInt("1398")
//		await CryptozMbcI9Ea.getBonusBoosters.call({from: accounts[3]});
//		const uintzJnTKah = await CryptozMbcI9Ea.getTimeToDailyBonus.call(addresshSxF29V, {from: accounts[5]});
//		const stringUbKXCGh = await CryptozMbcI9Ea.symbol.call({from: "0x0000000000000000000000000000000000000001"});
//		await CryptozMbcI9Ea.f.call({from: accounts[5]});
//		const boolDDp1Ecr = await CryptozMbcI9Ea.loadNewCardType.call(uintIbLQE7, stringUojoSMp, stringiNn7QEC, uint24GPWh, uintNrvl0kH, uintMpbBtCI, uintLesBIyk, uintMmBLIWA, uintvAU8INJ, {from: accounts[1]});
//		const addresstOx71UL = await CryptozMbcI9Ea.linkMySponsor.call(addressZc4um6A, {from: accounts[3]});
//		const stringxhkWTT3 = await CryptozMbcI9Ea.tokenURI.call(uintAKxLFzP, {from: accounts[0]});
		await CryptozMbcI9Ea.getBonusBoosters.call({from: accounts[3]});
//		await CryptozMbcI9Ea.getBonusBoosters.call({from: accounts[4]});
//		await CryptozMbcI9Ea.buyBoosterCardAndOpen.call({from: accounts[4]});

		await expect(CryptozMbcI9Ea.getBonusBoosters.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozMbcI9Ea = await Cryptoz.new({from: accounts[1]});
		const uintBg3jpYW = BigInt("251")
		const uintLClaez = BigInt("1877")
		const uintlbLqgRQ = BigInt("1041")
		const uintoIPExq3 = BigInt("81")
		const uintA06WSzW = BigInt("252")
		const uintdjtnZ7W = BigInt("145")
		const stringiNn7QEC = "88MgmgiRXWIiCKPQ9a3BQrVmlrd"
		const stringUojoSMp = "MShjFjU5VRrVLncImweNiV7YKy1ingpRNFYnobd8Iyfbnhu4C8SDwB4aFvagk"
		const uintrsSvN2j = BigInt("169")
		const uinth8RAx27 = BigInt("1033")
		const addresstOFWHLk = accounts[3]
		const boolDDp1Ecr = await CryptozMbcI9Ea.loadNewCardType.call(uintrsSvN2j, stringUojoSMp, stringiNn7QEC, uintdjtnZ7W, uintA06WSzW, uintoIPExq3, uintlbLqgRQ, uintLClaez, uintBg3jpYW, {from: accounts[1]});
//		await CryptozMbcI9Ea.withdraw.call({from: accounts[1]});
//		const uint256ar7QU3w = await CryptozMbcI9Ea.tokenOfOwnerByIndex.call(addresstOFWHLk, uinth8RAx27, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolDDp1Ecr, true)
		await expect(CryptozMbcI9Ea.withdraw.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozeGnpdWO = await Cryptoz.new({from: accounts[3]});
		const uintA5P274J = BigInt("185")
		const uintO6gQePP = BigInt("1662")
		const uintyRBpZhA = BigInt("936")
		const uintnG6cxWZ = BigInt("1798")
		const uintCFGrWTD = BigInt("1345")
		const uintJU05KRT = BigInt("4")
		const uintiXM3BLi = BigInt("770")
		const addressuUHei03 = accounts[3]
//		const boolZuHisN9 = await CryptozeGnpdWO.addTocardType.call(uintCFGrWTD, uintnG6cxWZ, uintyRBpZhA, uintO6gQePP, uintA5P274J, {from: accounts[3]});
//		const boolLb4aG6Q = await CryptozeGnpdWO.buyBoosterCard.call(uintJU05KRT, {from: accounts[0]});
//		await CryptozeGnpdWO.getTokensByRarity.call({from: accounts[4]});
//		const uint32Gzl6o1y = await CryptozeGnpdWO.isValidCard.call(uintiXM3BLi, {from: accounts[2]});
//		const uint03yR4v = await CryptozeGnpdWO.getTimeToDailyBonus.call(addressuUHei03, {from: accounts[4]});

		await expect(CryptozeGnpdWO.addTocardType.call(uintCFGrWTD, uintnG6cxWZ, uintyRBpZhA, uintO6gQePP, uintA5P274J, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozMbcI9Ea = await Cryptoz.new({from: accounts[1]});
		const uinti11IHnh = BigInt("1784")
		const addressqP4Qxlq = "0x0000000000000000000000000000000000000000"
		const uintz2lo6Vz = BigInt("24")
//		const uint256jgsdTC = await CryptozMbcI9Ea.tokenOfOwnerByIndex.call(addressqP4Qxlq, uinti11IHnh, {from: accounts[3]});
//		const boolZUONIX6 = await CryptozMbcI9Ea.buyCard.call(uintz2lo6Vz, {from: accounts[3]});

		await expect(CryptozMbcI9Ea.tokenOfOwnerByIndex.call(addressqP4Qxlq, uinti11IHnh, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})