const GreenMarkTrust = artifacts.require("GreenMarkTrust");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GreenMarkTrust', (accounts) => {
	it('test for GreenMarkTrust', async () => {
		const uint86ZEy6 = BigInt("1138")
		const stringM0sRpmk = "uUXjMAP6wfTE2lt0NUDOjsXRwI6odMbg7neAUikvfRMuFAMqXIRnQVWv"
		const string3pkhRB = "cDPJiT3Oqj1DFNEIWw69YKiXa9d7jxzqwcn"
		const GreenMarkTrustVvThCXd = await GreenMarkTrust.new(uint86ZEy6, stringM0sRpmk, string3pkhRB, {from: accounts[2]});
		const uintQDzpgPz = BigInt("997")
		const uintTrxS7Zv = BigInt("215")
		const uintQ5hYsBT = BigInt("197")
		const addressQTzClP1 = accounts[4]
		const uintnQpTcD3 = BigInt("1043")
		const addressMzBAyqe = accounts[0]
		const uintmJcbQ6 = BigInt("1270")
		const addressDRvsIiE = accounts[3]
		const address3sZtX9 = accounts[3]
//		const boolmRv24Is = await GreenMarkTrustVvThCXd.burn.call(uintQDzpgPz, {from: accounts[0]});
//		const boolesUREMG = await GreenMarkTrustVvThCXd.burn.call(uintTrxS7Zv, {from: accounts[1]});
//		const boolyT2ZHat = await GreenMarkTrustVvThCXd.transfer.call(addressQTzClP1, uintQ5hYsBT, {from: accounts[2]});
//		const boolnTK8ye = await GreenMarkTrustVvThCXd.approve.call(addressMzBAyqe, uintnQpTcD3, {from: accounts[1]});
//		const boolwTKAUme = await GreenMarkTrustVvThCXd.transferFrom.call(address3sZtX9, addressDRvsIiE, uintmJcbQ6, {from: accounts[5]});

		await expect(GreenMarkTrustVvThCXd.burn.call(uintQDzpgPz, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintDA12peU = BigInt("729")
		const stringYCw58ex = "Z5FJuSwH4lFTtYHb0g5h"
		const stringBkUb5PL = "2TIwyoSl51GF"
		const GreenMarkTrust5iVEhS = await GreenMarkTrust.new(uintDA12peU, stringYCw58ex, stringBkUb5PL, {from: accounts[2]});
		const bytekQfbKpl = "0x20060c07"
		const uintPcedSX = BigInt("715")
		const addresssGtAAkK = accounts[5]
		const byteWQlnSR7 = "0x0e1111161f08110e11190b030e1f1f13021d16001d02041e1b14180c"
		const uintjs71aqi = BigInt("570")
		const addressUGG1xsu = accounts[0]
		const uintfN7F9Td = BigInt("1090")
		const uintwgUlBFf = BigInt("676")
//		const boolmu4VjxJ = await GreenMarkTrust5iVEhS.approveAndCall.call(addresssGtAAkK, uintPcedSX, bytekQfbKpl, {from: accounts[5]});
//		const boolwvzG6df = await GreenMarkTrust5iVEhS.approveAndCall.call(addressUGG1xsu, uintjs71aqi, byteWQlnSR7, {from: accounts[3]});
//		const boolqCsV1Fn = await GreenMarkTrust5iVEhS.burn.call(uintfN7F9Td, {from: accounts[5]});
//		const boolLAXiUQi = await GreenMarkTrust5iVEhS.burn.call(uintwgUlBFf, {from: accounts[3]});

		await expect(GreenMarkTrust5iVEhS.approveAndCall.call(addresssGtAAkK, uintPcedSX, bytekQfbKpl, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintuxQzICf = BigInt("951")
		const stringfCsCpEp = "fJzhrTkYTVEe5DaweThsrsHayI1say3glHrtMsIVsqyicrqOdNEv2RIYTmg6p3vjYduu"
		const stringUYqDcfH = "wBDNpgH3NolIw7zXcTkoQ"
		const GreenMarkTrusttGtIy5 = await GreenMarkTrust.new(uintuxQzICf, stringfCsCpEp, stringUYqDcfH, {from: accounts[1]});
		const uintNnIG8JE = BigInt("1425")
		const addressvTLbHFr = accounts[1]
		const addresseD1Uucz = accounts[2]
		const uintVUCc596 = BigInt("1110")
		const addressaIJr9aP = accounts[1]
		const uintmx50hAC = BigInt("1963")
//		const boolqJCtoI5 = await GreenMarkTrusttGtIy5.transferFrom.call(addresseD1Uucz, addressvTLbHFr, uintNnIG8JE, {from: accounts[4]});
//		const boolEyh3UZB = await GreenMarkTrusttGtIy5.burnFrom.call(addressaIJr9aP, uintVUCc596, {from: accounts[3]});
//		const boolJdx1KKv = await GreenMarkTrusttGtIy5.burn.call(uintmx50hAC, {from: accounts[3]});

		await expect(GreenMarkTrusttGtIy5.transferFrom.call(addresseD1Uucz, addressvTLbHFr, uintNnIG8JE, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintwWZ6NFZ = BigInt("323")
		const stringyKBUqQz = "tJtCPFu4vS9f1KFNCBbzTxPLwuKLO9qMNvqilUmHkz"
		const stringLBVbeup = "TebumXhNgAYO5OtbaHprbHvxZPKEHmxT7XeJpQLRBCN9jCfbybJ2DRjyp0E7q6P2N2gzjD6IROQOhc"
		const GreenMarkTrustyvzdHAk = await GreenMarkTrust.new(uintwWZ6NFZ, stringyKBUqQz, stringLBVbeup, {from: "0x0000000000000000000000000000000000000001"});
		const uintb9xGCdi = BigInt("1920")
		const addressr4uUhXI = accounts[4]
		const addressKOm5e26 = accounts[1]
		const uintnkpzLJD = BigInt("2004")
		const uintQBG6PBV = BigInt("1069")
		const uintw3y557i = BigInt("371")
		const addressePMHWKK = accounts[4]
		const addressVDUlkZq = accounts[4]
		const uintPVvFCYc = BigInt("1311")
		const addressFgW40yH = accounts[1]
		const boolNMt2Fkz = await GreenMarkTrustyvzdHAk.transferFrom.call(addressKOm5e26, addressr4uUhXI, uintb9xGCdi, {from: accounts[2]});
		const boolY3pQ4ks = await GreenMarkTrustyvzdHAk.burn.call(uintnkpzLJD, {from: "0x0000000000000000000000000000000000000001"});
		const boolhBVrvOG = await GreenMarkTrustyvzdHAk.burn.call(uintQBG6PBV, {from: accounts[5]});
		const boolLALim8f = await GreenMarkTrustyvzdHAk.transferFrom.call(addressVDUlkZq, addressePMHWKK, uintw3y557i, {from: accounts[3]});
		const boolmNiWgPj = await GreenMarkTrustyvzdHAk.approve.call(addressFgW40yH, uintPVvFCYc, {from: accounts[2]});
	});

	it('test for GreenMarkTrust', async () => {
		const uintW3RzWwk = BigInt("1789")
		const stringUFICgPs = "mPa0XGqakZa74AKmqFnn85NMVGarjesnwCfCOIwK2EIMmWjoBkW5KngLmzKwHldrXfoyapCAd6HBsEPU7YldIFr"
		const stringbdCfhmO = "YCXQhBDV03GGK5J"
		const GreenMarkTrustAdBlbG1 = await GreenMarkTrust.new(uintW3RzWwk, stringUFICgPs, stringbdCfhmO, {from: accounts[3]});
		const uintVESeCGL = BigInt("1233")
		const addresseI9JNiz = "0x0000000000000000000000000000000000000001"
		const uintVKCeikR = BigInt("2005")
		const addressHR3W1xg = accounts[4]
		const uintBBmMzql = BigInt("869")
		const addressaPUpcW = accounts[0]
//		const boolEXkDe8S = await GreenMarkTrustAdBlbG1.burnFrom.call(addresseI9JNiz, uintVESeCGL, {from: accounts[1]});
//		const boolgiTkFm = await GreenMarkTrustAdBlbG1.approve.call(addressHR3W1xg, uintVKCeikR, {from: accounts[2]});
//		const boolchrZCWI = await GreenMarkTrustAdBlbG1.burnFrom.call(addressaPUpcW, uintBBmMzql, {from: accounts[1]});

		await expect(GreenMarkTrustAdBlbG1.burnFrom.call(addresseI9JNiz, uintVESeCGL, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintD7SdIqt = BigInt("1138")
		const stringM0sRpmk = "uUXjMAP6wfTE2lt0NUDOjsXRwI6odMbg7neAUikvfRMuFAMqXIRnQVWv"
		const string3pkhRB = "cDPJiT3Oqj1DFNEIWw69YKiXa9d7jxzqwcn"
		const GreenMarkTrustVvThCXd = await GreenMarkTrust.new(uintD7SdIqt, stringM0sRpmk, string3pkhRB, {from: accounts[2]});
		const uintDMnklCc = BigInt("197")
		const addressuDV6eIr = accounts[4]
		const uintVjvj3zy = BigInt("1043")
		const addressP2mjXF4 = accounts[0]
		const uintFO3PVT7 = BigInt("1270")
		const addressW3Cmddi = accounts[3]
		const addressKaBv1Lm = accounts[3]
		const boolyT2ZHat = await GreenMarkTrustVvThCXd.transfer.call(addressuDV6eIr, uintDMnklCc, {from: accounts[2]});
		const boolnTK8ye = await GreenMarkTrustVvThCXd.approve.call(addressP2mjXF4, uintVjvj3zy, {from: accounts[1]});
//		const boolwTKAUme = await GreenMarkTrustVvThCXd.transferFrom.call(addressKaBv1Lm, addressW3Cmddi, uintFO3PVT7, {from: accounts[5]});

		assert.equal(boolnTK8ye, true)
		assert.equal(boolyT2ZHat, true)
		await expect(GreenMarkTrustVvThCXd.transferFrom.call(addressKaBv1Lm, addressW3Cmddi, uintFO3PVT7, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintQ6SMBkt = BigInt("1789")
		const stringUFICgPs = "mPa0XGqakZa74AKmqFnn85NMVGarjesnwCfCOIwK2EIMmWjoBkW5KngLmzKwHldrXfoyapCAd6HBsEPU7YldIFr"
		const stringbdCfhmO = "YCXQhBDV03GGK5J"
		const GreenMarkTrustAdBlbG1 = await GreenMarkTrust.new(uintQ6SMBkt, stringUFICgPs, stringbdCfhmO, {from: accounts[3]});
		const uintpvkU4F = BigInt("1051")
		const uintoQHgqjA = BigInt("1983")
		const addressfzz6QxQ = "0x0000000000000000000000000000000000000002"
		const addressaRzCoRq = accounts[4]
		const boolx3Eur1f = await GreenMarkTrustAdBlbG1.burn.call(uintpvkU4F, {from: accounts[3]});
//		const boolZDAptFQ = await GreenMarkTrustAdBlbG1.transferFrom.call(addressaRzCoRq, addressfzz6QxQ, uintoQHgqjA, {from: accounts[0]});

		assert.equal(boolx3Eur1f, true)
		await expect(GreenMarkTrustAdBlbG1.transferFrom.call(addressaRzCoRq, addressfzz6QxQ, uintoQHgqjA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintrW4NdLU = BigInt("1789")
		const stringUFICgPs = "mPa0XGqakZa74AKmqFnn85NMVGarjesnwCfCOIwK2EIMmWjoBkW5KngLmzKwHldrXfoyapCAd6HBsEPU7YldIFr"
		const stringbdCfhmO = "YCXQhBDV03GGK5J"
		const GreenMarkTrustAdBlbG1 = await GreenMarkTrust.new(uintrW4NdLU, stringUFICgPs, stringbdCfhmO, {from: accounts[3]});
		const uintRLly4a = BigInt("243")
		const addresshSjdGv = accounts[3]
		const uintGh7l78h = BigInt("1983")
		const addressDBndIOB = "0x0000000000000000000000000000000000000001"
		const addressx5tWBjn = accounts[4]
		const uintRS6DlEr = BigInt("707")
		const addressyje93E0 = accounts[4]
//		const booloZO4M98 = await GreenMarkTrustAdBlbG1.burnFrom.call(addresshSjdGv, uintRLly4a, {from: accounts[4]});
//		const boolZDAptFQ = await GreenMarkTrustAdBlbG1.transferFrom.call(addressx5tWBjn, addressDBndIOB, uintGh7l78h, {from: accounts[0]});
//		const boolQSjDsI = await GreenMarkTrustAdBlbG1.approve.call(addressyje93E0, uintRS6DlEr, {from: accounts[2]});

		await expect(GreenMarkTrustAdBlbG1.burnFrom.call(addresshSjdGv, uintRLly4a, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})