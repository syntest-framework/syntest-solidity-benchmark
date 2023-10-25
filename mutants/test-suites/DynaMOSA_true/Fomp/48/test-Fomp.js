const Fomp = artifacts.require("Fomp");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Fomp', (accounts) => {
	it('test for Fomp', async () => {
		const addressP6wnOKv = accounts[1]
		const FomptgTbozy = await Fomp.new(addressP6wnOKv, {from: accounts[3]});
		const byteaqWLwOb = "0x181713020220130e1d0811001e001d0f1907081506190a181a020d12051d0115"
		const byteU0uUX4q = "0x02190404140c0213100b07140f0b1c0a0a141e151e0805161b0c1c0f0a001a13"
		const uintl4X5y4V = BigInt("60")
		const uintd5IWBEa = BigInt("1128")
		const uintM8q61Gi = BigInt("1873")
		const addressDo62oqX = accounts[1]
		const addressZu9zlb = accounts[2]
		const uintDDPwhQP = BigInt("797")
		const addresst2lq5hi = accounts[0]
		const addresscLMedMl = accounts[0]
//		const addressW4polYO = await FomptgTbozy.delegateBySig.call(addressDo62oqX, uintM8q61Gi, uintd5IWBEa, uintl4X5y4V, byteU0uUX4q, byteaqWLwOb, {from: accounts[4]});
//		const uint96Sx4sBMB = await FomptgTbozy.getCurrentVotes.call(addressZu9zlb, {from: accounts[0]});
//		const boolWU1kLVN = await FomptgTbozy.approve.call(addresst2lq5hi, uintDDPwhQP, {from: accounts[0]});
//		const addressPfTdVLD = await FomptgTbozy.delegate.call(addresscLMedMl, {from: accounts[3]});

		await expect(FomptgTbozy.delegateBySig.call(addressDo62oqX, uintM8q61Gi, uintd5IWBEa, uintl4X5y4V, byteU0uUX4q, byteaqWLwOb, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressohZmMx = accounts[5]
		const FompNmCvvr8 = await Fomp.new(addressohZmMx, {from: accounts[0]});
		const addressouJNN4 = "0x0000000000000000000000000000000000000001"
		const uintP97dkOA = BigInt("933")
		const addressQH5AgK6 = "0x0000000000000000000000000000000000000001"
		const addressDm2ESW = accounts[1]
		const addressqkz1ERa = accounts[2]
		const uint96NatYNlE = await FompNmCvvr8.getCurrentVotes.call(addressouJNN4, {from: accounts[4]});
//		const boolEV3zx7J = await FompNmCvvr8.transfer.call(addressQH5AgK6, uintP97dkOA, {from: accounts[1]});
//		const uintuKHfL4j = await FompNmCvvr8.allowance.call(addressqkz1ERa, addressDm2ESW, {from: accounts[2]});

		assert.equal(uint96NatYNlE, BigInt("0"))
		await expect(FompNmCvvr8.transfer.call(addressQH5AgK6, uintP97dkOA, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressNyvQs2o = accounts[3]
		const Fompb3cGku8 = await Fomp.new(addressNyvQs2o, {from: accounts[2]});
		const addressxlZZwr = accounts[1]
		const addresstbX3F0r = accounts[4]
		const addressvcplhZZ = accounts[1]
		const addressNyXtZQU = accounts[4]
		const addressxpfahvT = accounts[0]
		const uintuvoJ5L = BigInt("1283")
		const addressR0fIR0a = accounts[4]
		const addresskwAkpie = accounts[4]
		const addressojCMbVs = await Fompb3cGku8.delegate.call(addressxlZZwr, {from: "0x0000000000000000000000000000000000000001"});
		const uintWxy6NC = await Fompb3cGku8.allowance.call(addressvcplhZZ, addresstbX3F0r, {from: accounts[4]});
		const addressoSr94QW = await Fompb3cGku8.delegate.call(addressNyXtZQU, {from: accounts[0]});
		const uintJKNP1iE = await Fompb3cGku8.balanceOf.call(addressxpfahvT, {from: accounts[2]});
//		const boolD64nbY = await Fompb3cGku8.transferFrom.call(addresskwAkpie, addressR0fIR0a, uintuvoJ5L, {from: accounts[4]});

		assert.equal(uintJKNP1iE, BigInt("0"))
		assert.equal(uintWxy6NC, BigInt("0"))
		await expect(Fompb3cGku8.transferFrom.call(addresskwAkpie, addressR0fIR0a, uintuvoJ5L, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addresslmNDx6V = accounts[5]
		const Fompkp8h5Xi = await Fomp.new(addresslmNDx6V, {from: accounts[3]});
		const uintTdNeDGG = BigInt("1117")
		const addressQSXPGvP = accounts[5]
		const uintoh4CmK = BigInt("870")
		const addressUlxajCc = accounts[5]
		const uint96zhWAglM = await Fompkp8h5Xi.getPriorVotes.call(addressQSXPGvP, uintTdNeDGG, {from: accounts[5]});
		const boolf6nCzH1 = await Fompkp8h5Xi.approve.call(addressUlxajCc, uintoh4CmK, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolf6nCzH1, true)
		assert.equal(uint96zhWAglM, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressyBcO9fP = accounts[0]
		const FompoAWTdf0 = await Fomp.new(addressyBcO9fP, {from: accounts[5]});
		const uintFtipapg = BigInt("456")
		const addressKo3R5PG = accounts[2]
		const uintl6G17zg = BigInt("1164")
		const addressegc9Xqf = accounts[0]
		const addresschZREbX = "0x0000000000000000000000000000000000000001"
		const boolKUyy26 = await FompoAWTdf0.approve.call(addressKo3R5PG, uintFtipapg, {from: accounts[1]});
		const boolnntUxCM = await FompoAWTdf0.approve.call(addressegc9Xqf, uintl6G17zg, {from: "0x0000000000000000000000000000000000000001"});
		const uinthUL2B5U = await FompoAWTdf0.balanceOf.call(addresschZREbX, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolKUyy26, true)
		assert.equal(boolnntUxCM, true)
		assert.equal(uinthUL2B5U, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressrxxI3cT = accounts[5]
		const FompjizVeJ = await Fomp.new(addressrxxI3cT, {from: accounts[0]});
		const uintqXFfzOv = BigInt("1561")
		const addressYMOKnyZ = accounts[3]
		const addressvKWgbXg = accounts[2]
		const uintOtLZhnz = BigInt("536")
		const addressxGjB623 = accounts[4]
		const addressTox6IQz = accounts[3]
		const addressGqdMHWH = accounts[4]
		const addresslYyoOal = accounts[0]
		const bytedYujUs7 = "0x060a0e051f09130d0c0f08041e1a070f0716041f191d1f0302180f1d1c17051e"
		const byteZJJICek = "0x0503190b1d141e121e021509081d070c171c0209011b10051f1d16130401201a"
		const uintxtOMPp = BigInt("183")
		const uintqcLq3C3 = BigInt("393")
		const uintm6LgOm = BigInt("620")
		const addressfsCZV4H = accounts[2]
//		const boolC8qdjXC = await FompjizVeJ.transferFrom.call(addressvKWgbXg, addressYMOKnyZ, uintqXFfzOv, {from: accounts[3]});
//		const boolLM4uPpr = await FompjizVeJ.transferFrom.call(addressTox6IQz, addressxGjB623, uintOtLZhnz, {from: accounts[1]});
//		const uintQAnvk5g = await FompjizVeJ.allowance.call(addresslYyoOal, addressGqdMHWH, {from: accounts[0]});
//		const addressangImBj = await FompjizVeJ.delegateBySig.call(addressfsCZV4H, uintm6LgOm, uintqcLq3C3, uintxtOMPp, byteZJJICek, bytedYujUs7, {from: accounts[3]});

		await expect(FompjizVeJ.transferFrom.call(addressvKWgbXg, addressYMOKnyZ, uintqXFfzOv, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressO0SXuKH = accounts[3]
		const FompIT8YFRa = await Fomp.new(addressO0SXuKH, {from: accounts[1]});
		const bytendSFVXZ = "0x1d13050f0c160903131402070c02041016121907020302150a1d0e101a0a010e"
		const byteQjTDYVr = "0x1c0b0a0a19010b0410111d130f0006121716031d04151e0a0f190d1316181c12"
		const uintFmb45KF = BigInt("28")
		const uintN9pDQhT = BigInt("1714")
		const uintHEmrotA = BigInt("1353")
		const addresslXCbEwO = accounts[1]
		const uintAmRXjWv = BigInt("580")
		const addressrDKl6j = accounts[4]
		const byteKdqJnB4 = "0x101b1a031e081f15100118111e0c07160c1f08151c11061a06051b150910170f"
		const bytelMvJvS3 = "0x07171d1916131a0e060a0a1220050b201f050e011c05140d1620141c20180a09"
		const uinte4QU5r8 = BigInt("124")
		const uintFT75vBO = BigInt("142")
		const uintyaK4bAj = BigInt("1996")
		const addressxXbFGk9 = accounts[0]
//		const addressURuuYek = await FompIT8YFRa.delegateBySig.call(addresslXCbEwO, uintHEmrotA, uintN9pDQhT, uintFmb45KF, byteQjTDYVr, bytendSFVXZ, {from: accounts[3]});
//		const uint96LOKmoGK = await FompIT8YFRa.getPriorVotes.call(addressrDKl6j, uintAmRXjWv, {from: accounts[4]});
//		const addresswvx7hg1 = await FompIT8YFRa.delegateBySig.call(addressxXbFGk9, uintyaK4bAj, uintFT75vBO, uinte4QU5r8, bytelMvJvS3, byteKdqJnB4, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FompIT8YFRa.delegateBySig.call(addresslXCbEwO, uintHEmrotA, uintN9pDQhT, uintFmb45KF, byteQjTDYVr, bytendSFVXZ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressXOuzZwv = accounts[5]
		const Fompkp8h5Xi = await Fomp.new(addressXOuzZwv, {from: accounts[3]});
		const uintHpRFHxT = BigInt("878")
		const addressBtmXnIk = accounts[5]
		const uintY8R2Dd = BigInt("113")
		const addressPQmftKt = accounts[1]
		const boolf6nCzH1 = await Fompkp8h5Xi.approve.call(addressBtmXnIk, uintHpRFHxT, {from: "0x0000000000000000000000000000000000000001"});
		const boolYlV6GiN = await Fompkp8h5Xi.transfer.call(addressPQmftKt, uintY8R2Dd, {from: accounts[5]});

		assert.equal(boolYlV6GiN, true)
		assert.equal(boolf6nCzH1, true)
	});

	it('test for Fomp', async () => {
		const addressHfFurKS = accounts[5]
		const FompPKdaF7l = await Fomp.new(addressHfFurKS, {from: accounts[1]});
		const uintY5e8vZq = BigInt("124")
		const addressrl0apd = accounts[0]
		const addressDe4L3Jr = accounts[0]
		const uintlD6BOK5 = BigInt("1841")
		const addressARgG8ct = accounts[3]
		const addressSg5n1JB = accounts[5]
		const addresscrUdOVv = accounts[0]
		const addressrJMewKI = accounts[3]
		const booldWvJZMi = await FompPKdaF7l.approve.call(addressrl0apd, uintY5e8vZq, {from: accounts[3]});
		const addressQAPoB2O = await FompPKdaF7l.delegate.call(addressDe4L3Jr, {from: accounts[5]});
//		const boolNoKO0Ak = await FompPKdaF7l.transfer.call(addressARgG8ct, uintlD6BOK5, {from: accounts[1]});
//		const uintqWQONby = await FompPKdaF7l.allowance.call(addresscrUdOVv, addressSg5n1JB, {from: accounts[1]});
//		const addressl6WvNnw = await FompPKdaF7l.delegate.call(addressrJMewKI, {from: accounts[4]});

		assert.equal(booldWvJZMi, true)
		await expect(FompPKdaF7l.transfer.call(addressARgG8ct, uintlD6BOK5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addresss6hmme6 = accounts[5]
		const Fompkp8h5Xi = await Fomp.new(addresss6hmme6, {from: accounts[3]});
		const uintIpzIUnd = BigInt("40")
		const addressLmRGDXR = accounts[3]
		const addressMbTE78q = accounts[3]
		const byteuq39nLf = "0x0b0906041b1e0f060702130e0f0a09090f100c061318031d021f1909011d160a"
		const byteOBjfTF = "0x131c09161b1017141e0e021f120a050c1d02160109001b151215191f1c0d0e12"
		const uintaye3DbJ = BigInt("115")
		const uintsfb73uu = BigInt("72")
		const uintdhw7CV = BigInt("1450")
		const address7hLObu = accounts[4]
		const uint96zhWAglM = await Fompkp8h5Xi.getPriorVotes.call(addressLmRGDXR, uintIpzIUnd, {from: accounts[5]});
		const uintTMkwuvR = await Fompkp8h5Xi.balanceOf.call(addressMbTE78q, {from: accounts[3]});
//		const addresswoDOsl = await Fompkp8h5Xi.delegateBySig.call(address7hLObu, uintdhw7CV, uintsfb73uu, uintaye3DbJ, byteOBjfTF, byteuq39nLf, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint96zhWAglM, BigInt("0"))
		assert.equal(uintTMkwuvR, BigInt("0"))
		await expect(Fompkp8h5Xi.delegateBySig.call(address7hLObu, uintdhw7CV, uintsfb73uu, uintaye3DbJ, byteOBjfTF, byteuq39nLf, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addresseYTbXw6 = accounts[0]
		const FomppxPzT70 = await Fomp.new(addresseYTbXw6, {from: "0x0000000000000000000000000000000000000001"});
		const byteqa0tnW = "0x05190e0f141a11200a071401111f111c050c041b12030113020f0b1c08061004"
		const byteG3udru = "0x1b1c191f0f1607141f1d181a100011020c0a0d10180702021910171f171a0206"
		const uintGIKH51 = BigInt("159")
		const uintZHQ4sN3 = BigInt("1884")
		const uintl0g5ijG = BigInt("1823")
		const addressqW13OuY = accounts[4]
		const byteVj6nHLp = "0x1d080719120d1d12190f1b0d170a021d170b030a1002021c11110c09031b1606"
		const byteR2BnQrQ = "0x170f0b0d0e071c01121e190f14081f031419020e0d100201160d07021a0a121d"
		const uintBpzfACO = BigInt("5")
		const uintFIWYyaz = BigInt("2008")
		const uintqLdzw5w = BigInt("1167")
		const addressqgQcD0U = accounts[5]
		const uintWNpXebH = BigInt("436")
		const addressPk3BP96 = "0x0000000000000000000000000000000000000001"
		const addressa0Eq8D = await FomppxPzT70.delegateBySig.call(addressqW13OuY, uintl0g5ijG, uintZHQ4sN3, uintGIKH51, byteG3udru, byteqa0tnW, {from: accounts[2]});
		const addresse6Axl4e = await FomppxPzT70.delegateBySig.call(addressqgQcD0U, uintqLdzw5w, uintFIWYyaz, uintBpzfACO, byteR2BnQrQ, byteVj6nHLp, {from: accounts[0]});
		const boolDQYxgV = await FomppxPzT70.transfer.call(addressPk3BP96, uintWNpXebH, {from: accounts[1]});
	});
})