const Vat = artifacts.require("Vat");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Vat', (accounts) => {
	it('test for Vat', async () => {
		const VatQrF22M = await Vat.new({from: accounts[0]});
		const intu6p47sE = BigInt("710")
		const intpJlBU1t = BigInt("-1603")
		const addressIUsnBrP = accounts[2]
		const addressVlTkST5 = accounts[2]
		const addressBOKaUsY = "0x0000000000000000000000000000000000000001"
		const byteJ9vUjyj = "0x0719171a1a04071803130405081e0e0b151418120b1c171c1f0b171f13041716"
		const uintkbGbmQy = BigInt("1966")
		const bytexfziShZ = "0x0e1e0c150005000c1816111907061c0e0c0412030c0902200f040b0704001801"
		const intbykief = BigInt("-890")
		const intuO7n1Cf = BigInt("-1395")
		const addresswn5f841 = "0x0000000000000000000000000000000000000001"
		const addressLbvNF3s = accounts[2]
		const addressGFMyYo = "0x0000000000000000000000000000000000000001"
		const byteXeZQn3q = "0x041a040d131d191f041b1a1a121e190105091713131b1a020b18080c09080b0c"
		const uintc3miMJX = BigInt("956")
		const addresscKZPAK1 = "0x0000000000000000000000000000000000000001"
		const addresssasurNn = accounts[1]
		const intlGhimm = BigInt("-807")
		const intLmE6yeU = BigInt("346")
		const addressmnTWict = accounts[0]
		const addressbvfg3Mt = accounts[3]
		const addressAR4MGke = "0x0000000000000000000000000000000000000001"
		const byteqSIcYAB = "0x061f031115140c1b1f1508000b1e151c040d14150e021e090e0b1002170d1a12"
//		const bytes32YEukpO = await VatQrF22M.grab.call(byteJ9vUjyj, addressBOKaUsY, addressVlTkST5, addressIUsnBrP, intpJlBU1t, intu6p47sE, {from: accounts[4]});
//		const bytes32oj2BLdO = await VatQrF22M.file.call(bytexfziShZ, uintkbGbmQy, {from: accounts[1]});
//		const bytes32eDTO9Up = await VatQrF22M.grab.call(byteXeZQn3q, addressGFMyYo, addressLbvNF3s, addresswn5f841, intuO7n1Cf, intbykief, {from: accounts[1]});
//		const addressBdktHsX = await VatQrF22M.move.call(addresssasurNn, addresscKZPAK1, uintc3miMJX, {from: accounts[2]});
//		const bytes32GaNhV0W = await VatQrF22M.grab.call(byteqSIcYAB, addressAR4MGke, addressbvfg3Mt, addressmnTWict, intLmE6yeU, intlGhimm, {from: accounts[2]});

		await expect(VatQrF22M.grab.call(byteJ9vUjyj, addressBOKaUsY, addressVlTkST5, addressIUsnBrP, intpJlBU1t, intu6p47sE, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatWVkPs6o = await Vat.new({from: accounts[2]});
		const uintOqEMluo = BigInt("445")
		const addressmzrVOXP = accounts[1]
		const addressBOzaHVs = accounts[1]
		const uintGjvYgmt = BigInt("1341")
		const addressSkzbTG2 = accounts[3]
		const addressoAzGe6i = accounts[4]
		const byteSjhxJZj = "0x180d1417181b020a0a0916141e1605180b031b0d0a091f0201081f001e0b0503"
		const intgHH346R = BigInt("-1589")
		const intzGWwwE1 = BigInt("-1010")
		const addresswrTJwno = accounts[4]
		const addresscchkC3T = "0x0000000000000000000000000000000000000001"
		const addressmlRww2d = accounts[3]
		const byteZ2UfxiQ = "0x0d1b13131a070a1f0e010c130b161c0608080410070402131a071e05060a0f01"
//		const addressYxHa8XT = await VatWVkPs6o.move.call(addressBOzaHVs, addressmzrVOXP, uintOqEMluo, {from: accounts[2]});
//		const bytes32q5SA0Ez = await VatWVkPs6o.flux.call(byteSjhxJZj, addressoAzGe6i, addressSkzbTG2, uintGjvYgmt, {from: accounts[1]});
//		const bytes32giHdMQI = await VatWVkPs6o.grab.call(byteZ2UfxiQ, addressmlRww2d, addresscchkC3T, addresswrTJwno, intzGWwwE1, intgHH346R, {from: accounts[0]});
//		await VatWVkPs6o.note.call({from: accounts[5]});

		await expect(VatWVkPs6o.move.call(addressBOzaHVs, addressmzrVOXP, uintOqEMluo, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatDoaiLgW = await Vat.new({from: accounts[2]});
		const addressCGw4xpA = accounts[2]
		const uintqA1ms6q = BigInt("1504")
		const addressbai5r7z = accounts[1]
		const addressA01Pgim = accounts[5]
		const uintU4Qsh1h = BigInt("1105")
		const byteJh0FREN = "0x081408140b1805030b001f000c0e14200f040c1907071f030e181c1511121d00"
		const bytehs6nYs0 = "0x1800020e160d161f1c1c1a060717071c13100c0a0011160317151a0c1a171e09"
		const uintISRkCPF = BigInt("1721")
		const addressPrM23nJ = "0x0000000000000000000000000000000000000001"
		const addressZb1wRUF = accounts[3]
		const addressbGGcZoH = accounts[3]
		const addressRygpQB3 = await VatDoaiLgW.nope.call(addressCGw4xpA, {from: accounts[4]});
//		const addressESe0Bye = await VatDoaiLgW.suck.call(addressA01Pgim, addressbai5r7z, uintqA1ms6q, {from: accounts[1]});
//		const bytes32ncfkVHL = await VatDoaiLgW.file.call(bytehs6nYs0, byteJh0FREN, uintU4Qsh1h, {from: accounts[5]});
//		const addressQHqMsg8 = await VatDoaiLgW.suck.call(addressZb1wRUF, addressPrM23nJ, uintISRkCPF, {from: accounts[5]});
//		const address4gj10q = await VatDoaiLgW.hope.call(addressbGGcZoH, {from: accounts[0]});

		await expect(VatDoaiLgW.suck.call(addressA01Pgim, addressbai5r7z, uintqA1ms6q, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatqzIsvKO = await Vat.new({from: accounts[3]});
		const intuhqMuqD = BigInt("-1669")
		const intpf9PJ4c = BigInt("-1947")
		const addressrNMNsBO = accounts[0]
		const addressc91ggYG = accounts[4]
		const addressZ8Do65c = accounts[5]
		const bytexGvLNyh = "0x041e1e0c1a031b020905081b0d110d1210061a1209171f1c1c19101b0a111a10"
		const uintlhZhFK = BigInt("1262")
		const byteRBAtQP = "0x051108171b1b080c201b151a06191912131a051b190020160b0c1d0209081212"
		const byteYg58Z7s = "0x1d0c0f0807041103020a181d1218140d1013120d0106041d150e0f00161b0a0c"
		const uintahypGkN = BigInt("1242")
		const addressc23cLjb = accounts[0]
//		const bytes32rQWHfOv = await VatqzIsvKO.grab.call(bytexGvLNyh, addressZ8Do65c, addressc91ggYG, addressrNMNsBO, intpf9PJ4c, intuhqMuqD, {from: accounts[3]});
//		await VatqzIsvKO.note.call({from: accounts[3]});
//		const bytes32o8DMXGE = await VatqzIsvKO.file.call(byteYg58Z7s, byteRBAtQP, uintlhZhFK, {from: "0x0000000000000000000000000000000000000001"});
//		const uintyBu71g3 = await VatqzIsvKO.heal.call(uintahypGkN, {from: accounts[1]});
//		const addressrjYZqbT = await VatqzIsvKO.nope.call(addressc23cLjb, {from: accounts[2]});

		await expect(VatqzIsvKO.grab.call(bytexGvLNyh, addressZ8Do65c, addressc91ggYG, addressrNMNsBO, intpf9PJ4c, intuhqMuqD, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatH7XF8l = await Vat.new({from: accounts[0]});
		const uintzPt095F = BigInt("752")
		const byteuY8GLE = "0x05141e0704071e000f181a150b1011160910010509121609011a1b1b0d0a0f08"
		const uintTmbVZg1 = BigInt("552")
		const uintC8cUTE6 = BigInt("696")
		const uintspxkkS7 = BigInt("792")
		const intu0vUSUY = BigInt("1736")
		const inttFFTflZ = BigInt("-1566")
		const addressi7k54qj = accounts[4]
		const addressyVvkvj9 = accounts[0]
		const bytepu7nejD = "0x061a170303050d141e121b151a1e090b171a03010a040d130612091700160301"
//		const bytes32KEHQgCY = await VatH7XF8l.file.call(byteuY8GLE, uintzPt095F, {from: accounts[4]});
//		const uintUZzIdEd = await VatH7XF8l.heal.call(uintTmbVZg1, {from: accounts[0]});
//		const uintmjRZw5l = await VatH7XF8l.heal.call(uintC8cUTE6, {from: accounts[3]});
//		const uintBzPoKGx = await VatH7XF8l.heal.call(uintspxkkS7, {from: accounts[1]});
//		const bytes32rpZQ1Og = await VatH7XF8l.fork.call(bytepu7nejD, addressyVvkvj9, addressi7k54qj, inttFFTflZ, intu0vUSUY, {from: accounts[0]});

		await expect(VatH7XF8l.file.call(byteuY8GLE, uintzPt095F, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatYMpFMPS = await Vat.new({from: "0x0000000000000000000000000000000000000001"});
		const uintFWqDPWe = BigInt("1822")
		const uintOHAopa1 = BigInt("1448")
		const addresscaNslUn = accounts[4]
		const addressi3urpad = accounts[2]
		const uintm1Iiig4 = BigInt("534")
		const uintCvqMjJG = BigInt("355")
		const addresscIK67O = accounts[1]
		const addressVDzoc2R = accounts[1]
		const byteorvHl7 = "0x091e0d1f0b1e1f1c151b1005001b0f111420021a1f0019041c1908121404150a"
		const uintlzitPpk = await VatYMpFMPS.heal.call(uintFWqDPWe, {from: accounts[2]});
		const addressJE44at2 = await VatYMpFMPS.move.call(addressi3urpad, addresscaNslUn, uintOHAopa1, {from: accounts[4]});
		await VatYMpFMPS.auth.call({from: accounts[3]});
		const uintgTqlfwZ = await VatYMpFMPS.heal.call(uintm1Iiig4, {from: accounts[3]});
		const bytes32vGzS1B = await VatYMpFMPS.flux.call(byteorvHl7, addressVDzoc2R, addresscIK67O, uintCvqMjJG, {from: accounts[3]});
	});

	it('test for Vat', async () => {
		const VatWVkPs6o = await Vat.new({from: accounts[2]});
		const uintedSSIN9 = BigInt("445")
		const addressEbj9IrX = accounts[1]
		const addressWPoV4tE = accounts[1]
		const uintjy23IB = BigInt("1341")
		const addresskBJfZsC = accounts[3]
		const addressTiFAov = accounts[4]
		const bytesb2Jk2S = "0x180d1417181b020a0a0916141e1605180b031b0d0a091f0201081f001e0b0503"
		const intijXbtk8 = BigInt("-1589")
		const intVgHGcLT = BigInt("-1010")
		const addressIrrwhuv = accounts[4]
		const addressBp1VrXD = "0x0000000000000000000000000000000000000001"
		const addresssYHg9i = accounts[3]
		const byteCEMMKy = "0x0d1b13131a070a1f0e010c130b161c0608080410070402131a071e05060a0f01"
//		await VatWVkPs6o.note.call({from: accounts[5]});
//		const addressYxHa8XT = await VatWVkPs6o.move.call(addressWPoV4tE, addressEbj9IrX, uintedSSIN9, {from: accounts[2]});
//		const bytes32q5SA0Ez = await VatWVkPs6o.flux.call(bytesb2Jk2S, addressTiFAov, addresskBJfZsC, uintjy23IB, {from: accounts[1]});
//		const bytes32giHdMQI = await VatWVkPs6o.grab.call(byteCEMMKy, addresssYHg9i, addressBp1VrXD, addressIrrwhuv, intVgHGcLT, intijXbtk8, {from: accounts[0]});
		await VatWVkPs6o.note.call({from: accounts[5]});

		await expect(VatWVkPs6o.note.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatWVkPs6o = await Vat.new({from: accounts[2]});
		const addressCNbMLmv = accounts[3]
		const uintewjPLl2 = BigInt("1341")
		const addressUVNnIX = accounts[4]
		const addressqbYgxe = accounts[4]
		const byteb8YM48w = "0x180d1417181b020a0a0916141e1605180b031b0d0a091f0201081f001e0b0503"
		const intTm3vmLX = BigInt("-1589")
		const intBMcQy2S = BigInt("-1010")
		const addressvG7RrUF = accounts[4]
		const addressRvLGb3f = "0x0000000000000000000000000000000000000001"
		const addressHLTxgoH = accounts[3]
		const byteiRPQ68J = "0x0d1b13131a070a1f0e010c130b161c0608080410070402131a071e05060a0f01"
		const addressJug2vk = await VatWVkPs6o.nope.call(addressCNbMLmv, {from: accounts[2]});
//		const bytes32q5SA0Ez = await VatWVkPs6o.flux.call(byteb8YM48w, addressqbYgxe, addressUVNnIX, uintewjPLl2, {from: accounts[1]});
//		const bytes32giHdMQI = await VatWVkPs6o.grab.call(byteiRPQ68J, addressHLTxgoH, addressRvLGb3f, addressvG7RrUF, intBMcQy2S, intTm3vmLX, {from: accounts[0]});
//		await VatWVkPs6o.auth.call({from: accounts[3]});
//		await VatWVkPs6o.note.call({from: accounts[5]});

		await expect(VatWVkPs6o.flux.call(byteb8YM48w, addressqbYgxe, addressUVNnIX, uintewjPLl2, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatN8Tpp56 = await Vat.new({from: accounts[4]});
		const byter1X1Uu8 = "0x1a0c010c0a140a11151418010e140d08000819060f1b010c0c0208071f140519"
		const uintRBY2TFX = BigInt("1301")
		const intKtMzn6q = BigInt("-466")
		const addressk0tpPkL = accounts[2]
		const byteZZU1j6k = "0x0b190a1c06130e192014030e171e1e020d1212030c1b050403020f1e0f1d070c"
		const uintEW05Bzo = BigInt("946")
		const addressfPVbnV6 = accounts[5]
		const addressRC8ke5l = accounts[1]
		const addressoRXqdT7 = accounts[2]
		const bytes32S4bxKlg = await VatN8Tpp56.init.call(byter1X1Uu8, {from: accounts[4]});
//		const uintC6j5vGW = await VatN8Tpp56.heal.call(uintRBY2TFX, {from: accounts[3]});
//		const bytes32anf8RfU = await VatN8Tpp56.fold.call(byteZZU1j6k, addressk0tpPkL, intKtMzn6q, {from: accounts[0]});
//		const addressYqwRYcn = await VatN8Tpp56.move.call(addressRC8ke5l, addressfPVbnV6, uintEW05Bzo, {from: accounts[1]});
//		const addressLnjlA4O = await VatN8Tpp56.hope.call(addressoRXqdT7, {from: accounts[0]});

		await expect(VatN8Tpp56.heal.call(uintRBY2TFX, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatqzIsvKO = await Vat.new({from: accounts[3]});
		const intieCCQnF = BigInt("-915")
		const intyZdWkLD = BigInt("-840")
		const addressrc7jB1l = accounts[0]
		const addresspezBOe = accounts[4]
		const byteT0PV7S = "0x051b180b0e0f1902161a031f0c0e09020111030508051c070b161a1c1e1a1b10"
		const intIyIpV2B = BigInt("-1669")
		const intfF3OfeZ = BigInt("-1947")
		const addressUJUAdFm = accounts[0]
		const addressSWXGKx = accounts[4]
		const addressLujxReY = accounts[5]
		const byteJM8UiLV = "0x041e1e0c1a031b020905081b0d110d1210061a1209171f1c1c19101b0a111a10"
		const uintet1m84i = BigInt("1262")
		const bytefMyigmX = "0x051108171b1b080c201b151a06191912131a051b190020160b0c1d0209081212"
		const byteh6vdnhb = "0x1d0c0f0807041103020a181d1218140d1013120d0106041d150e0f00161b0a0c"
		const uintLGh1lm1 = BigInt("1242")
		const addressDffsYYE = accounts[3]
		const addressvuy7xpN = accounts[0]
//		const bytes32gRFmyVN = await VatqzIsvKO.fork.call(byteT0PV7S, addresspezBOe, addressrc7jB1l, intyZdWkLD, intieCCQnF, {from: accounts[3]});
//		const bytes32rQWHfOv = await VatqzIsvKO.grab.call(byteJM8UiLV, addressLujxReY, addressSWXGKx, addressUJUAdFm, intfF3OfeZ, intIyIpV2B, {from: accounts[3]});
//		const bytes32o8DMXGE = await VatqzIsvKO.file.call(byteh6vdnhb, bytefMyigmX, uintet1m84i, {from: "0x0000000000000000000000000000000000000001"});
//		const uintyBu71g3 = await VatqzIsvKO.heal.call(uintLGh1lm1, {from: accounts[1]});
//		const addressP2JUjrC = await VatqzIsvKO.rely.call(addressDffsYYE, {from: accounts[2]});
//		const addressrjYZqbT = await VatqzIsvKO.nope.call(addressvuy7xpN, {from: accounts[2]});

		await expect(VatqzIsvKO.fork.call(byteT0PV7S, addresspezBOe, addressrc7jB1l, intyZdWkLD, intieCCQnF, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatEB7nUyI = await Vat.new({from: accounts[0]});
		const intaGSqw21 = BigInt("-1955")
		const intXJ4rdc = BigInt("1321")
		const addresshFpTf0D = accounts[0]
		const addressHEEWpcY = accounts[0]
		const addressphaAIYo = accounts[1]
		const bytenTFKYeX = "0x201f151f16170d121c1502201f1d111015050202051914190907101d11101b08"
		const addressWnkdMnW = accounts[3]
		const intDVlAtgD = BigInt("1484")
		const addressP8TOXqn = accounts[2]
		const byteQbYxfWO = "0x141507201a171d07011e19020c070911061707010713131b0401131a17081206"
		const uintMb6M1wz = BigInt("672")
		const addressUuzoJQr = "0x0000000000000000000000000000000000000001"
		const addressJCFWlck = accounts[0]
		const byteeiUs2e = "0x1e101e121f02150a12140c16150d0018101f17101a1802031c06010a1f1e0517"
//		const bytes32blm6XjX = await VatEB7nUyI.grab.call(bytenTFKYeX, addressphaAIYo, addressHEEWpcY, addresshFpTf0D, intXJ4rdc, intaGSqw21, {from: accounts[0]});
//		await VatEB7nUyI.cage.call({from: accounts[2]});
//		await VatEB7nUyI.note.call({from: accounts[4]});
//		const addressendAnj5 = await VatEB7nUyI.hope.call(addressWnkdMnW, {from: accounts[2]});
//		const bytes32zHzns4b = await VatEB7nUyI.slip.call(byteQbYxfWO, addressP8TOXqn, intDVlAtgD, {from: accounts[3]});
//		const bytes32tXkNw7N = await VatEB7nUyI.flux.call(byteeiUs2e, addressJCFWlck, addressUuzoJQr, uintMb6M1wz, {from: accounts[0]});

		await expect(VatEB7nUyI.grab.call(bytenTFKYeX, addressphaAIYo, addressHEEWpcY, addresshFpTf0D, intXJ4rdc, intaGSqw21, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatN8Tpp56 = await Vat.new({from: accounts[4]});
		const uintxr02jG = BigInt("409")
		const addressqKZSD5T = "0x0000000000000000000000000000000000000001"
		const addressq2NksKb = accounts[4]
		const byteGVLkHtl = "0x1a0c010c0a140a11151418010e140d08000819060f1b010c0c0208071f140519"
		const uintxG2lmcu = BigInt("1301")
		const intQXGejkn = BigInt("-466")
		const addressvldNNwl = accounts[2]
		const byteR05xLH = "0x0b190a1c06130e192014030e171e1e020d1212030c1b050403020f1e0f1d070c"
		const uintikprwAJ = BigInt("946")
		const addressR5UH5So = accounts[6]
		const addressjyBwnku = accounts[1]
		const addressEXjwUfP = accounts[2]
//		const addresstEinT0 = await VatN8Tpp56.move.call(addressq2NksKb, addressqKZSD5T, uintxr02jG, {from: accounts[4]});
//		const bytes32S4bxKlg = await VatN8Tpp56.init.call(byteGVLkHtl, {from: accounts[4]});
//		const uintC6j5vGW = await VatN8Tpp56.heal.call(uintxG2lmcu, {from: accounts[3]});
//		const bytes32anf8RfU = await VatN8Tpp56.fold.call(byteR05xLH, addressvldNNwl, intQXGejkn, {from: accounts[0]});
//		const addressYqwRYcn = await VatN8Tpp56.move.call(addressjyBwnku, addressR5UH5So, uintikprwAJ, {from: accounts[1]});
//		const addressLnjlA4O = await VatN8Tpp56.hope.call(addressEXjwUfP, {from: accounts[0]});

		await expect(VatN8Tpp56.move.call(addressq2NksKb, addressqKZSD5T, uintxr02jG, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatuHuQLl8 = await Vat.new({from: accounts[2]});
		const uinthPKxdR = BigInt("550")
		const byteYAOmHaZ = "0x170e1e04170e1c161f140e1912080a090e100e000e09011107150a130e11070e"
		const byteJLRad9N = "0x0b0d060420150e160f141c1e120e1d1f1d0e0a190715140c1008071d0b191b0f"
		const intkD0VRXO = BigInt("-1181")
		const intrUZP8Ui = BigInt("1420")
		const addresso3Zw62 = accounts[4]
		const addressFPu0t2X = accounts[1]
		const byteuNBWxcB = "0x01131d030919041f1c11161e110906150d131d150c05120d0d0c19020a0d1301"
//		const bytes32ltDmKNY = await VatuHuQLl8.file.call(byteJLRad9N, byteYAOmHaZ, uinthPKxdR, {from: accounts[2]});
//		const bytes32yzFGZv0 = await VatuHuQLl8.fork.call(byteuNBWxcB, addressFPu0t2X, addresso3Zw62, intrUZP8Ui, intkD0VRXO, {from: accounts[0]});

		await expect(VatuHuQLl8.file.call(byteJLRad9N, byteYAOmHaZ, uinthPKxdR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatuHuQLl8 = await Vat.new({from: accounts[2]});
		const intPOSzzLd = BigInt("-1600")
		const intH7S6B6H = BigInt("-70")
		const addressPJe0jpf = accounts[2]
		const addressEBhKqy = accounts[2]
		const bytedZOZMns = "0x010b18060113061a0c1006021f191b1503091902191d1a170d1319190f1f190c"
		const intVU7tVrV = BigInt("1422")
		const addressecbT388 = accounts[3]
		const byteEfDh8wg = "0x0d190a06121a060805161b0614080b0d1f031b021701040114082016160e1617"
		const intSzwkPJ3 = BigInt("994")
		const intJU20uox = BigInt("1312")
		const addressQsSZRH = accounts[3]
		const addressZxOyu8N = "0x0000000000000000000000000000000000000001"
		const addressJCxx6MS = accounts[0]
		const byteRO75BrC = "0x1a1a021a1a0d1e1d160d170c0d00121e0c05010f1c1b120b1c19160914110f20"
//		const bytes32MoqKp26 = await VatuHuQLl8.fork.call(bytedZOZMns, addressEBhKqy, addressPJe0jpf, intH7S6B6H, intPOSzzLd, {from: "0x0000000000000000000000000000000000000001"});
//		const bytes32o1gI0Da = await VatuHuQLl8.fold.call(byteEfDh8wg, addressecbT388, intVU7tVrV, {from: accounts[0]});
//		const bytes32VzH8v0e = await VatuHuQLl8.frob.call(byteRO75BrC, addressJCxx6MS, addressZxOyu8N, addressQsSZRH, intJU20uox, intSzwkPJ3, {from: accounts[1]});

		await expect(VatuHuQLl8.fork.call(bytedZOZMns, addressEBhKqy, addressPJe0jpf, intH7S6B6H, intPOSzzLd, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatuHuQLl8 = await Vat.new({from: accounts[2]});
		const addressb4kv7Dw = accounts[5]
		const intFRUFiO2 = BigInt("-1235")
		const intPeDnZ4K = BigInt("-11")
		const addressPbWvpDu = accounts[1]
		const addressAk3ENzv = accounts[5]
		const addressIVxFyDM = "0x0000000000000000000000000000000000000001"
		const byteqC520OZ = "0x1e090f011502021a1701201a0e1f0f1e1c15190b1c0a16151f1b1419170b1609"
		const intGWVk34l = BigInt("-1600")
		const intD0i56r2 = BigInt("-62")
		const addressTr9JAjS = accounts[1]
		const addressbLm6jht = accounts[2]
		const byteOXuEs4o = "0x010b18060113061a0c1006021f191b1503091902191d1a170d1319190f1f190c"
		const address665MYr = await VatuHuQLl8.hope.call(addressb4kv7Dw, {from: accounts[3]});
//		await VatuHuQLl8.note.call({from: accounts[2]});
//		const bytes32heGPdtF = await VatuHuQLl8.frob.call(byteqC520OZ, addressIVxFyDM, addressAk3ENzv, addressPbWvpDu, intPeDnZ4K, intFRUFiO2, {from: accounts[4]});
//		await VatuHuQLl8.note.call({from: accounts[1]});
//		const bytes32MoqKp26 = await VatuHuQLl8.fork.call(byteOXuEs4o, addressbLm6jht, addressTr9JAjS, intD0i56r2, intGWVk34l, {from: "0x0000000000000000000000000000000000000001"});

		await expect(VatuHuQLl8.note.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatWVkPs6o = await Vat.new({from: accounts[2]});
		const addressvrVHRwW = accounts[3]
		const intb4o2NX = BigInt("1813")
		const intwrEyjME = BigInt("252")
		const addressyDYace1 = accounts[1]
		const addresswYsyKXt = accounts[0]
		const addressZ4KPoDr = "0x0000000000000000000000000000000000000001"
		const byteKbM1JKF = "0x0b0405150310161a0d0017181b140a061f0a0203190a031c071a0d180f0f1d19"
		const uintu48Pl1L = BigInt("1341")
		const addressaSMo40g = accounts[4]
		const addressF4Kjgh7 = accounts[4]
		const bytexd3gHV5 = "0x180d1417181b020a0a0916141e1605180b031b0d0a091f0201081f001e0b0503"
		const intPDugztw = BigInt("-1589")
		const intNzfAUtj = BigInt("-1010")
		const addressFEoUb2 = accounts[4]
		const addressVuqCOnw = "0x0000000000000000000000000000000000000001"
		const addressXMLEUri = accounts[3]
		const byteam8kz1K = "0x0d1b13131a070a1f0e010c130b161c0608080410070402131a071e05060a0f01"
		const inttX0bQpg = BigInt("1373")
		const intQvVDrAa = BigInt("-931")
		const addresskWJYrgg = accounts[5]
		const addressF675SzM = accounts[2]
		const byteoeiuPr = "0x1206110d06000b011115070c090e07131a010c161b10060617141716131c0800"
		const addressJug2vk = await VatWVkPs6o.nope.call(addressvrVHRwW, {from: accounts[2]});
//		const bytes32HZbE6ZA = await VatWVkPs6o.frob.call(byteKbM1JKF, addressZ4KPoDr, addresswYsyKXt, addressyDYace1, intwrEyjME, intb4o2NX, {from: accounts[3]});
//		const bytes32q5SA0Ez = await VatWVkPs6o.flux.call(bytexd3gHV5, addressF4Kjgh7, addressaSMo40g, uintu48Pl1L, {from: accounts[1]});
//		const bytes32giHdMQI = await VatWVkPs6o.grab.call(byteam8kz1K, addressXMLEUri, addressVuqCOnw, addressFEoUb2, intNzfAUtj, intPDugztw, {from: accounts[0]});
//		await VatWVkPs6o.auth.call({from: accounts[3]});
//		const bytes32Rlcxc1g = await VatWVkPs6o.fork.call(byteoeiuPr, addressF675SzM, addresskWJYrgg, intQvVDrAa, inttX0bQpg, {from: accounts[2]});
//		await VatWVkPs6o.note.call({from: accounts[0]});
//		await VatWVkPs6o.note.call({from: accounts[5]});

		await expect(VatWVkPs6o.frob.call(byteKbM1JKF, addressZ4KPoDr, addresswYsyKXt, addressyDYace1, intwrEyjME, intb4o2NX, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatTlJJP9 = await Vat.new({from: accounts[2]});
		const intULAgrM = BigInt("150")
		const addressDu9kO6k = accounts[4]
		const byteps4n1ko = "0x0f100712040e0a0814120f090f171f0c10041f1c03121d1313090e0b15141e14"
		const addressy40jYi = accounts[0]
		const intNOmYsU4 = BigInt("-1185")
		const addressjXbkms = accounts[5]
		const byte9eQGUr = "0x1109081d18150d0e110f030e1c0816101d1c14150302011e021c1f1a11091312"
		const uintFhyWs4 = BigInt("1764")
		const byteFxozQI = "0x1e0b1e0f070e100a021c1e0f06061d0e0b1d05150518161a171b180d1017061b"
		const byteIyqmEPI = "0x1b1b201a111f18021b11111a0906030300191e160f1e1b1d1f021e05140b0911"
		const bytes32wQvlEyT = await VatTlJJP9.fold.call(byteps4n1ko, addressDu9kO6k, intULAgrM, {from: accounts[2]});
		const addressc2Uu2aZ = await VatTlJJP9.hope.call(addressy40jYi, {from: accounts[2]});
//		await VatTlJJP9.note.call({from: accounts[3]});
//		const bytes32VMAkT2Y = await VatTlJJP9.fold.call(byte9eQGUr, addressjXbkms, intNOmYsU4, {from: accounts[1]});
//		const bytes32j6Z0gbC = await VatTlJJP9.file.call(byteIyqmEPI, byteFxozQI, uintFhyWs4, {from: accounts[5]});

		await expect(VatTlJJP9.note.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatWVkPs6o = await Vat.new({from: accounts[2]});
		const address8b1SeH = accounts[0]
		const uintbt0ftZX = BigInt("1438")
		const byteasObhxy = "0x0a101a1a010302031a1002141b14131d1b20181818110c110d0b020a1208201e"
		const addressEMlShNj = await VatWVkPs6o.deny.call(address8b1SeH, {from: accounts[2]});
//		const bytes32AeT39r = await VatWVkPs6o.file.call(byteasObhxy, uintbt0ftZX, {from: accounts[5]});
//		await VatWVkPs6o.auth.call({from: accounts[3]});

		await expect(VatWVkPs6o.file.call(byteasObhxy, uintbt0ftZX, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatuHuQLl8 = await Vat.new({from: accounts[2]});
		const uintPdHoPLQ = BigInt("1553")
		const addressrEOqQbx = accounts[0]
		const addresss7n5bXA = accounts[2]
		const intDSaaGAz = BigInt("-1600")
		const intbJgaTL7 = BigInt("-70")
		const addressQt3bvFd = accounts[2]
		const addressaD7XWGx = accounts[3]
		const byteZHyCZbR = "0x010b18060113061a0c1006021f191b1503091902191d1a170d13191a0f1f190c"
		const addressxwAEhF5 = await VatuHuQLl8.suck.call(addresss7n5bXA, addressrEOqQbx, uintPdHoPLQ, {from: accounts[2]});
//		const bytes32MoqKp26 = await VatuHuQLl8.fork.call(byteZHyCZbR, addressaD7XWGx, addressQt3bvFd, intbJgaTL7, intDSaaGAz, {from: "0x0000000000000000000000000000000000000001"});
//		await VatuHuQLl8.note.call({from: accounts[0]});

		await expect(VatuHuQLl8.fork.call(byteZHyCZbR, addressaD7XWGx, addressQt3bvFd, intbJgaTL7, intDSaaGAz, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatuHuQLl8 = await Vat.new({from: accounts[2]});
		const addressgwIWnu4 = accounts[1]
		const uintqNCCUuh = BigInt("6")
		const addressSncaksf = accounts[2]
		const addresslUalI8J = accounts[0]
		const byteslqbA9S = "0x120d1b170504111e16030a11111011070504191712171d0b03101c061e0a1f13"
		const intbk9Tqsq = BigInt("-1600")
		const intkQXoJo3 = BigInt("-70")
		const addressuZ0vbzi = accounts[3]
		const addressdNPfvor = accounts[2]
		const bytetdj0nMU = "0x010b18060113061a0c1006021f191b1503091902191d1a170d13191a0f1f190c"
		const addressvNqgbV = await VatuHuQLl8.hope.call(addressgwIWnu4, {from: accounts[3]});
//		const bytes32tCpfAn5 = await VatuHuQLl8.flux.call(byteslqbA9S, addresslUalI8J, addressSncaksf, uintqNCCUuh, {from: accounts[0]});
//		const bytes32MoqKp26 = await VatuHuQLl8.fork.call(bytetdj0nMU, addressdNPfvor, addressuZ0vbzi, intkQXoJo3, intbk9Tqsq, {from: "0x0000000000000000000000000000000000000001"});

		await expect(VatuHuQLl8.flux.call(byteslqbA9S, addresslUalI8J, addressSncaksf, uintqNCCUuh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatuHuQLl8 = await Vat.new({from: accounts[2]});
		const intn3trRot = BigInt("-1831")
		const addressVYbIvyE = accounts[1]
		const byteeAIJkMh = "0x120c130514080f0211180d121513060c01181b12111112171b05050b161a1e1a"
		const uintX3OLcUX = BigInt("83")
		const addressyfOV6ER = accounts[3]
		const addressbFiLVr = accounts[3]
		const addressw9LvUtX = accounts[2]
		const uintTkA3Pif = BigInt("1569")
		const addressrwkKWQ = accounts[5]
		const addressWTv3Rwc = accounts[4]
		const addressGWqdExu = accounts[0]
		const bytezoTRtMi = "0x1f1d17141f1c1d0d1a0f07181f06130b030d0c1a081d05001b17050609070b0b"
		const uintUszvzgP = BigInt("542")
		const byteGl5xdpM = "0x170e1e04170e1c161f140e1b12080a090e100e000e09011107150a130e11070e"
		const byteZSBkhLt = "0x0b0d060420150e160f141c1e120e1d1f1d0e0a190715140c1008071d0b191b0f"
//		const bytes32uYfTTWA = await VatuHuQLl8.slip.call(byteeAIJkMh, addressVYbIvyE, intn3trRot, {from: accounts[2]});
//		const addressZOKh749 = await VatuHuQLl8.move.call(addressbFiLVr, addressyfOV6ER, uintX3OLcUX, {from: accounts[3]});
//		const addressXyk6lSL = await VatuHuQLl8.deny.call(addressw9LvUtX, {from: accounts[3]});
//		const addressqdUYNWZ = await VatuHuQLl8.suck.call(addressWTv3Rwc, addressrwkKWQ, uintTkA3Pif, {from: accounts[3]});
//		const addresspESs0VO = await VatuHuQLl8.hope.call(addressGWqdExu, {from: accounts[2]});
//		const bytes32kDERkBM = await VatuHuQLl8.init.call(bytezoTRtMi, {from: accounts[3]});
//		const bytes32ltDmKNY = await VatuHuQLl8.file.call(byteZSBkhLt, byteGl5xdpM, uintUszvzgP, {from: accounts[2]});

		await expect(VatuHuQLl8.slip.call(byteeAIJkMh, addressVYbIvyE, intn3trRot, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatuHuQLl8 = await Vat.new({from: accounts[2]});
		const uinthvCZGCS = BigInt("542")
		const byteEKfzsjV = "0x0207070008070b110b0c0c031e0c0320090208080efffffffe18131b031e101120201e"
		const byteRCIpWC = "0x0b0d060420150e160f141c1e120e1d1f1d0e0a190715140c1008071d0b191b0f"
//		const bytes32ltDmKNY = await VatuHuQLl8.file.call(byteRCIpWC, byteEKfzsjV, uinthvCZGCS, {from: accounts[2]});

		await expect(VatuHuQLl8.file.call(byteRCIpWC, byteEKfzsjV, uinthvCZGCS, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatfwLsqqn = await Vat.new({from: accounts[0]});
		const intyycsicC = BigInt("1351")
		const addressHuxvF6p = accounts[0]
		const byteV8rqMM = "0x170e0812040c1c150317200e02071f0a0e1a07071205190f10100312100e140a"
		const addressPwFQ5yb = accounts[2]
		const intGVcQAtQ = BigInt("267")
		const addressbWHen4 = accounts[0]
		const bytemgw8cdh = "0x0b05101020090b031805141114121c1e101f05040e170e1a03040e0f120a1618"
		const addressONtzU1N = accounts[2]
//		await VatfwLsqqn.cage.call({from: accounts[0]});
//		const bytes32QosP2b = await VatfwLsqqn.slip.call(byteV8rqMM, addressHuxvF6p, intyycsicC, {from: accounts[4]});
//		const addressGev0IM = await VatfwLsqqn.deny.call(addressPwFQ5yb, {from: accounts[2]});
//		const bytes32gmivK3E = await VatfwLsqqn.fold.call(bytemgw8cdh, addressbWHen4, intGVcQAtQ, {from: accounts[2]});
//		const addressMXLKaqE = await VatfwLsqqn.nope.call(addressONtzU1N, {from: accounts[3]});

		await expect(VatfwLsqqn.cage.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatuHuQLl8 = await Vat.new({from: accounts[2]});
		const addressTwDfLbS = accounts[3]
		const uintIqTikaa = BigInt("1058")
		const uintfMCFbtr = BigInt("542")
		const bytehju1e9W = "0x170e1e04170e1c161f140e1912080a090e100e000e09011107150a130e11070e"
		const bytePPEMmkq = "0x0b0d060420150e160f141c1e120e1d1f1d0e0a190715140c1008071d0b191b0f"
		const addressd1lfSb6 = await VatuHuQLl8.rely.call(addressTwDfLbS, {from: accounts[2]});
//		const uintU9TeqJ = await VatuHuQLl8.heal.call(uintIqTikaa, {from: accounts[4]});
//		const bytes32ltDmKNY = await VatuHuQLl8.file.call(bytePPEMmkq, bytehju1e9W, uintfMCFbtr, {from: accounts[2]});

		await expect(VatuHuQLl8.heal.call(uintIqTikaa, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatuHuQLl8 = await Vat.new({from: accounts[2]});
		const uintIWG4E12 = BigInt("542")
		const byteBSg9cDl = "0x0207070008070b110b0c0c031e0c0320090208080effffffff18131b031e101120201e"
		const byteoR5xNwC = "0x0b0d060420150e160f141c1e120e1d1f1d0e0a190715140c1008071d0b191b0f"
//		const bytes32ltDmKNY = await VatuHuQLl8.file.call(byteoR5xNwC, byteBSg9cDl, uintIWG4E12, {from: accounts[2]});

		await expect(VatuHuQLl8.file.call(byteoR5xNwC, byteBSg9cDl, uintIWG4E12, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatuHuQLl8 = await Vat.new({from: accounts[2]});
		const addresswBKHjfB = accounts[4]
		const int6t5G9Q = BigInt("-1878")
		const intJ4IzbXr = BigInt("-1113")
		const addressbnPpc04 = "0x0000000000000000000000000000000000000001"
		const addressBoGnxQP = "0x0000000000000000000000000000000000000001"
		const bytejz0EhAj = "0x0b170c0d031d0005051d1a19001a0a1815101a101a1e141c110a140c07190003"
		const uintcG22ySe = BigInt("542")
		const byteCjftg8y = "0x0207070008070b110b0c0c031e0c0320090208080e0118131b031e101120201e"
		const bytenMjg9Z5 = "0x0b0d060420150e160f141c1e120e1d1f1d0e0a190715140c1008071d0c191b0f"
		const addressgVK0MNB = await VatuHuQLl8.nope.call(addresswBKHjfB, {from: accounts[0]});
		const bytes32dAmiolr = await VatuHuQLl8.fork.call(bytejz0EhAj, addressBoGnxQP, addressbnPpc04, intJ4IzbXr, int6t5G9Q, {from: "0x0000000000000000000000000000000000000001"});
//		const bytes32ltDmKNY = await VatuHuQLl8.file.call(bytenMjg9Z5, byteCjftg8y, uintcG22ySe, {from: accounts[2]});

		await expect(VatuHuQLl8.file.call(bytenMjg9Z5, byteCjftg8y, uintcG22ySe, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatKOOOC7Q = await Vat.new({from: accounts[1]});
		const intotNyRmZ = BigInt("1599")
		const addressduOmV5O = accounts[5]
		const byteADl6Ctq = "0x1c13170b1f10180f1d131e00ffffffff0a0f1d121e1c141d1a0b1c031b0f140d031208"
		const int5DARZ5 = BigInt("1646")
		const addressyZIlgXL = accounts[0]
		const byteZHJBNTV = "0x0606050809170d151b1d1a191e1c041c1e021200110f101219070a1710181109"
		const intNODnGSO = BigInt("1858")
		const intzB3HgTn = BigInt("-764")
		const addressQzKEkbH = accounts[4]
		const addressnWtcGM8 = accounts[1]
		const addressRkaXMcD = accounts[4]
		const byteB5WKWD = "0x110319040f0a1a181f0318011e1d14130d20090c1a0a06201604101b0d0c0b0b"
		const uintbBiUctH = BigInt("1055")
//		const bytes32U6ryhck = await VatKOOOC7Q.slip.call(byteADl6Ctq, addressduOmV5O, intotNyRmZ, {from: accounts[1]});
//		const bytes32SAGJBxY = await VatKOOOC7Q.slip.call(byteZHJBNTV, addressyZIlgXL, int5DARZ5, {from: accounts[3]});
//		const bytes32I7undft = await VatKOOOC7Q.grab.call(byteB5WKWD, addressRkaXMcD, addressnWtcGM8, addressQzKEkbH, intzB3HgTn, intNODnGSO, {from: accounts[1]});
//		const uintVavki1h = await VatKOOOC7Q.heal.call(uintbBiUctH, {from: "0x0000000000000000000000000000000000000001"});

		await expect(VatKOOOC7Q.slip.call(byteADl6Ctq, addressduOmV5O, intotNyRmZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})